#!/usr/bin/env python3
"""
Atualiza as páginas de vagas a partir de um endpoint JSON.

- FULL_PAGES  (seo.html, lp.html): cards completos + JobPosting schemas + freshness
- SIMPLE_PAGES (formacao.html):    lista simplificada (vaga-card), descrição truncada

Pra testar sem endpoint, deixe USE_MOCK = True.
"""

import json, re, html, os, urllib.request
from datetime import datetime, timedelta
from pathlib import Path

# ─── Config ──────────────────────────────────────────────────────────
USE_MOCK = True   # ← True pra testar localmente | False pra usar o endpoint

JOBS_ENDPOINT = "https://api.virtap.com.br/public/projects"
BASE_URL      = "https://www.virtap.com.br/vagas-assistente-virtual/"

FULL_PAGES   = ["vagas-assistente-virtual/index.html", "vagas-assistente-virtual/como-acessar.html"]
SIMPLE_PAGES = ["/formacoes/assistencia-virtual/index.html"]

# ─── Mock (só usado se USE_MOCK = True) ──────────────────────────────
def _ms_ago(hours=0, days=0):
    return int((datetime.now() - timedelta(hours=hours, days=days)).timestamp() * 1000)

MOCK_JOBS = [
    {
        "id": "WlQ3MVTQNG",
        "title": "Assistente Pessoal",
        "description": "Preciso de uma assistente para me auxiliar com coisas operacionais do dia a dia, como organizar minha agenda, fazer mercado online, eventualmente compra de passagens áreas, agendamentos médicos e outras tarefas pessoais.",
        "registration_timestamp": _ms_ago(hours=3),
    },
    {
        "id": "4ICl8BcCon",
        "title": "Assistente ou Secretaria virtual",
        "description": "Demanda de 3 a 4 horas por semana para as seguintes atividades:\nPreenchimento de planilha de despesas e reembolsos.\nPreenchimento de certificados de cursos dos alunos.\nGestão de e-mails, organização de documentos e agenda.\nPesquisa de orçamentos de serviços.",
        "registration_timestamp": _ms_ago(days=2),
    },
    {
        "id": "HZeapLKu8Q",
        "title": "Secretária para médico psiquiatra",
        "description": "Preciso de uma secretária para ajudar com o atendimento e gestão de agenda, em horário comercial.",
        "registration_timestamp": _ms_ago(days=2),
    },
    {
        "id": "GcuHyV2Y53",
        "title": "Assistente Administrativo - Full-time",
        "description": "Preciso de alguém para cuidar das seguintes tarefas:\n\n• Gestão de Agenda e E-mails\n• Atendimento ao Cliente.\n\nGostaria de alguém que fosse além do atendimento básico.",
        "registration_timestamp": _ms_ago(days=7),
    },
    {
        "id": "kF1droJVME",
        "title": "Assistente Pessoal",
        "description": "Preciso de alguém para cuidar das seguintes tarefas:\n\n• Compromissos e Agenda Pessoal\n• Pagamentos, Cotações e Lembretes\n• Documentação e Seguros de Veículos\n• Tarefas do Dia a Dia.",
        "registration_timestamp": _ms_ago(days=7),
    },
    {
        "id": "1Rg0ur4WQf",
        "title": "Assistente Pessoal e Administrativo",
        "description": "Busco assistente para auxiliar com:\n\n* Pagamentos via link de cartão de crédito;\n* Inclusão desses pagamentos no grupo de finanças;\n* Check-in de voos;\n* Organização de reservas de hotéis e viagens.",
        "registration_timestamp": _ms_ago(days=8),
    },
]

# ─── Helpers ─────────────────────────────────────────────────────────
MESES = ["janeiro","fevereiro","março","abril","maio","junho",
         "julho","agosto","setembro","outubro","novembro","dezembro"]

def today_iso():   return datetime.now().strftime("%Y-%m-%d")
def today_label():
    d = datetime.now(); return f"{d.day} de {MESES[d.month-1]} de {d.year}"
def add_days(iso, n):
    return (datetime.strptime(iso, "%Y-%m-%d") + timedelta(days=n)).strftime("%Y-%m-%d")

def time_ago(epoch_ms):
    diff_s = datetime.now().timestamp() - epoch_ms/1000
    m, h, d = int(diff_s//60), int(diff_s//3600), int(diff_s//86400)
    if m < 60: return f"Publicado {m} minuto{'s' if m!=1 else ''} atrás"
    if h < 24: return f"Publicado {h} hora{'s' if h!=1 else ''} atrás"
    return f"Publicado {d} dia{'s' if d!=1 else ''} atrás"

def truncate(text, max_len=180):
    text = re.sub(r"\r\n?", "\n", text)
    text = re.sub(r"\n\s*\n+", "\n\n", text)
    text = re.sub(r"[ \t]+", " ", text).strip()
    if len(text) <= max_len: return text
    return text[:max_len].rsplit(" ", 1)[0] + "..."

# ─── Fetch ───────────────────────────────────────────────────────────
def fetch_jobs():
    if USE_MOCK:
        print("⚠ Usando MOCK_JOBS (USE_MOCK = True)")
        return MOCK_JOBS

    headers = {"User-Agent": "VirtapBot/1.0"}
    if token := os.environ.get("JOBS_TOKEN"):
        headers["Authorization"] = f"Bearer {token}"

    req = urllib.request.Request(JOBS_ENDPOINT, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

# ─── Builders ────────────────────────────────────────────────────────
def build_cards(jobs):
    return "\n".join(f"""
                    <div class="col-lg-4 col-md-6 mb_30">
                        <div class="pricing_card vagas_card" id="vaga-{j['id']}">
                            <div class="top">
                                <h3>{html.escape(j['title'])}</h3>
                                <p class="vagas_data">{time_ago(j['registration_timestamp'])}</p>
                            </div>
                            <p class="vagas_desc">{html.escape(j['description'])}</p>
                            <a href="#acesso" class="secondary_button vagas_btn">Quero me candidatar</a>
                        </div>
                    </div>""" for j in jobs)

def build_schemas(jobs):
    out = []
    for j in jobs:
        posted = datetime.fromtimestamp(j['registration_timestamp']/1000).strftime("%Y-%m-%d")
        out.append(f"""
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": {json.dumps(j['title'], ensure_ascii=False)},
      "description": {json.dumps(j['description'], ensure_ascii=False)},
      "url": "{BASE_URL}#vaga-{j['id']}",
      "datePosted": "{posted}",
      "validThrough": "{add_days(posted, 30)}",
      "jobLocationType": "TELECOMMUTE",
      "applicantLocationRequirements": {{ "@type": "Country", "name": "BR" }},
      "hiringOrganization": {{
        "@type": "Organization",
        "name": "Virtap",
        "sameAs": "https://www.virtap.com.br"
      }}
    }}
    </script>""")
    return "\n".join(out)

def build_simple_cards(jobs, limit=3):
    out = []
    for j in jobs[:limit]:
        desc = html.escape(truncate(j['description'])).replace("\n", "<br>\n            ")
        out.append(f"""        <div class="vaga-card">
          <div class="vaga-card__header">
            <h3 class="vaga-card__title">{html.escape(j['title'])}</h3>
            <span class="vaga-card__date">{time_ago(j['registration_timestamp'])}</span>
          </div>
          <p class="vaga-card__desc">
            {desc}
          </p>
        </div>""")
    return "\n\n".join(out)

# ─── Update ──────────────────────────────────────────────────────────
def replace_vagas_block(content, inner, indent="                "):
    return re.sub(
        r"<!-- VAGAS:START -->[\s\S]*?<!-- VAGAS:END -->",
        f"<!-- VAGAS:START -->\n{inner}\n{indent}<!-- VAGAS:END -->",
        content,
    )

def update_full(path, jobs):
    p = Path(path); c = p.read_text(encoding="utf-8")
    c = replace_vagas_block(c, build_cards(jobs))
    c = re.sub(
        r"<!-- SCHEMAS:START -->[\s\S]*?<!-- SCHEMAS:END -->",
        f"<!-- SCHEMAS:START -->\n{build_schemas(jobs)}\n    <!-- SCHEMAS:END -->", c)
    c = re.sub(r'<time datetime="[\d-]+">[^<]*</time>',
               f'<time datetime="{today_iso()}">{today_label()}</time>', c)
    c = re.sub(r'"dateModified":\s*"[\d-]+"', f'"dateModified": "{today_iso()}"', c)
    p.write_text(c, encoding="utf-8"); print(f"✓ {path}")

def update_simple(path, jobs):
    p = Path(path); c = p.read_text(encoding="utf-8")
    c = replace_vagas_block(c, build_simple_cards(jobs, limit=3), indent="      ")
    p.write_text(c, encoding="utf-8"); print(f"✓ {path}")

# ─── Main ────────────────────────────────────────────────────────────
if __name__ == "__main__":
    jobs = fetch_jobs()
    print(f"Encontradas {len(jobs)} vagas")
    for f in FULL_PAGES:   update_full(f, jobs)
    for f in SIMPLE_PAGES: update_simple(f, jobs)