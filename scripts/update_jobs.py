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
USE_MOCK = False   # ← True pra testar localmente | False pra usar o endpoint

JOBS_ENDPOINT = "https://api.virtap.com.br/public/projects"
BASE_URL      = "https://www.virtap.com.br/vagas-assistente-virtual/"

FULL_PAGES   = ["vagas-assistente-virtual/index.html", "vagas-assistente-virtual/como-acessar.html"]
SIMPLE_PAGES = ["formacoes/assistencia-virtual/index.html"]

# ─── Mock (só usado se USE_MOCK = True) ──────────────────────────────
def _ms_ago(hours=0, days=0):
    return int((datetime.now() - timedelta(hours=hours, days=days)).timestamp() * 1000)

MOCK_JOBS = [
    {
        "id": "n8KpQ2LmXa",
        "title": "Assistente Virtual para CEO e Família",
        "description": "Procuro uma assistente virtual organizada e proativa para apoiar tanto demandas profissionais quanto pessoais no dia a dia.\n\nAtividades principais:\n\n• Gestão de agenda profissional e pessoal\n• Agendamento de reuniões, consultas e compromissos familiares\n• Compra de passagens aéreas e reservas de hotéis\n• Organização de documentos e pagamentos recorrentes\n• Cotações e compras online\n• Controle de lembretes importantes (renovações, vencimentos e datas especiais)\n• Acompanhamento de entregas e prestadores de serviço\n• Suporte em tarefas administrativas diversas\n\nBusco alguém de confiança, com excelente organização, boa comunicação e atenção aos detalhes.\n\nA demanda estimada é de 5 a 10 horas por semana, com possibilidade de aumento conforme a adaptação.\n\nPor favor, informe sua experiência e valores na proposta.\n",
        "registration_timestamp": _ms_ago(hours=6),
    },
    {
        "id": "t4YwR8NbQk",
        "title": "Secretária Virtual para Clínica de Nutrição",
        "description": "Preciso de uma secretária virtual para auxiliar no atendimento de pacientes e organização da agenda.\n\nAtividades:\n\n• Responder mensagens no WhatsApp\n• Agendar e remarcar consultas\n• Confirmar atendimentos no dia anterior\n• Enviar orientações e materiais aos pacientes\n• Organizar agenda semanal\n• Cobrança e acompanhamento de pagamentos\n\nA demanda é principalmente em horário comercial, de segunda a sexta-feira.\n\nBusco alguém cordial, organizada e com boa comunicação.\n",
        "registration_timestamp": _ms_ago(days=1),
    },
    {
        "id": "m7LcV3QaPe",
        "title": "Assistente Administrativo para Imobiliária",
        "description": "Procuro profissional para auxiliar com tarefas administrativas e atendimento.\n\nPrincipais atividades:\n\n• Cadastro de imóveis no sistema\n• Atualização de anúncios em portais\n• Organização de contratos e documentos\n• Atendimento inicial a clientes\n• Agendamento de visitas\n• Controle de pagamentos e comissões\n\nCarga estimada de 20 horas por semana.\n",
        "registration_timestamp": _ms_ago(days=2),
    },
    {
        "id": "p9XdK6TrUw",
        "title": "Assistente Pessoal para Rotina Familiar",
        "description": "Busco assistente para ajudar com tarefas do cotidiano da minha família.\n\nAtividades frequentes:\n\n• Agendamento de consultas médicas\n• Organização de viagens\n• Compra de presentes e itens online\n• Controle de contas e vencimentos\n• Contato com escolas e prestadores de serviço\n• Lembretes de compromissos importantes\n\nA demanda é variável, mas ocorre ao longo de toda a semana.\n",
        "registration_timestamp": _ms_ago(days=4),
    },
    {
        "id": "q2HsN5BmZj",
        "title": "Assistente Virtual para E-commerce",
        "description": "Preciso de uma assistente virtual para dar suporte operacional ao meu e-commerce.\n\nResponsabilidades:\n\n• Atendimento ao cliente por e-mail e WhatsApp\n• Acompanhamento de pedidos e entregas\n• Cadastro de produtos\n• Atualização de planilhas\n• Contato com fornecedores\n• Emissão de etiquetas e notas\n\nDesejável experiência com marketplaces e Excel.\n",
        "registration_timestamp": _ms_ago(days=5),
    },
    {
        "id": "r6GtF1CvLs",
        "title": "Secretária Remota para Advogado",
        "description": "Procuro secretária remota para auxiliar na rotina do escritório.\n\nAtividades:\n\n• Atendimento a clientes\n• Organização de agenda e prazos\n• Envio de documentos e contratos\n• Controle de pagamentos\n• Follow-up com clientes\n• Organização de arquivos digitais\n\nA demanda é de aproximadamente 4 horas por dia em horário comercial.\n\nPor favor, envie sua experiência e pretensão de valores.\n",
        "registration_timestamp": _ms_ago(days=9),
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
    block = f"<!-- VAGAS:START -->\n{inner}\n{indent}<!-- VAGAS:END -->"
    return re.sub(
        r"<!-- VAGAS:START -->[\s\S]*?<!-- VAGAS:END -->",
        lambda m: block, content,
    )

def update_full(path, jobs):
    p = Path(path); c = p.read_text(encoding="utf-8")

    c = replace_vagas_block(c, build_cards(jobs))

    schemas_block = f"<!-- SCHEMAS:START -->\n{build_schemas(jobs)}\n    <!-- SCHEMAS:END -->"
    c = re.sub(
        r"<!-- SCHEMAS:START -->[\s\S]*?<!-- SCHEMAS:END -->",
        lambda m: schemas_block, c,
    )

    c = re.sub(r'<time datetime="[\d-]+">[^<]*</time>',
               f'<time datetime="{today_iso()}">{today_label()}</time>', c)
    c = re.sub(r'"dateModified":\s*"[\d-]+"',
               f'"dateModified": "{today_iso()}"', c)

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
