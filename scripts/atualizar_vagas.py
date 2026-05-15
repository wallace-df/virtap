#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Versão sem dependências externas.
Utiliza apenas bibliotecas nativas do Python 3:
- urllib.request
- html.parser
- re
- html
- datetime

Uso:
    python3 atualizar_vagas.py arquivo.html
"""

import sys
import re
import html
from datetime import datetime
from urllib.request import Request, urlopen
from html.parser import HTMLParser


SOURCE_URL = "https://www.virtap.com.br/vagas-assistente-virtual/"


# ---------------------------------------------------------------------
# Utilidades
# ---------------------------------------------------------------------
def normalize_whitespace(text):
    text = text.replace("\r", "\n")
    text = re.sub(r"\n\s*\n+", "\n\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    return text.strip()


def truncate_text(text, max_length=180):
    """
    Trunca o texto preservando as quebras de linha originais.
    """
    text = normalize_whitespace(text)

    # Conta o tamanho considerando os line breaks
    if len(text) <= max_length:
        return text

    truncated = text[:max_length].rsplit(" ", 1)[0]
    return truncated + "..."

# ---------------------------------------------------------------------
# Parser HTML simples para extrair as vagas
# ---------------------------------------------------------------------
class JobsParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.jobs = []

        self.in_card = False
        self.card_depth = 0

        self.capture_title = False
        self.capture_date = False
        self.capture_desc = False

        self.title = []
        self.date = []
        self.desc = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get("class", "").split()

        # Início do card da vaga
        if (
            tag == "div"
            and "pricing_card" in classes
            and "vagas_card" in classes
        ):
            self.in_card = True
            self.card_depth = 1
            self.title = []
            self.date = []
            self.desc = []
            return

        if self.in_card and tag == "div":
            self.card_depth += 1

        if not self.in_card:
            return

        if tag == "h3":
            self.capture_title = True

        if tag == "p" and "vagas_data" in classes:
            self.capture_date = True

        if tag == "p" and "vagas_desc" in classes:
            self.capture_desc = True

    def handle_endtag(self, tag):
        if self.capture_title and tag == "h3":
            self.capture_title = False

        if self.capture_date and tag == "p":
            self.capture_date = False

        if self.capture_desc and tag == "p":
            self.capture_desc = False

        if self.in_card and tag == "div":
            self.card_depth -= 1

            # Fim do card
            if self.card_depth == 0:
                title = normalize_whitespace("".join(self.title))
                date = normalize_whitespace("".join(self.date))
                desc = normalize_whitespace("".join(self.desc))

                if title and date and desc:
                    self.jobs.append({
                        "title": title,
                        "date": date,
                        "desc": truncate_text(desc),
                    })

                self.in_card = False

    def handle_data(self, data):
        if self.capture_title:
            self.title.append(data)

        if self.capture_date:
            self.date.append(data)

        if self.capture_desc:
            self.desc.append(data)


# ---------------------------------------------------------------------
# Download da página
# ---------------------------------------------------------------------
def fetch_html(url):
    req = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; VirtapBot/1.0)"
        }
    )

    with urlopen(req, timeout=30) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        return response.read().decode(charset, errors="replace")


def fetch_latest_jobs(limit=3):
    html_source = fetch_html(SOURCE_URL)

    parser = JobsParser()
    parser.feed(html_source)

    if not parser.jobs:
        raise RuntimeError("Nenhuma vaga encontrada.")

    return parser.jobs[:limit]


# ---------------------------------------------------------------------
# Geração do HTML
# ---------------------------------------------------------------------

def build_jobs_html(jobs):
    blocks = []

    for job in jobs:
        title = html.escape(job["title"])
        date = html.escape(job["date"])

        # IMPORTANTE:
        # 1. Escapa HTML
        # 2. Converte \n em <br>
        # 3. Preserva a formatação visual da lista
        desc = html.escape(job["desc"]).replace(
            "\n",
            "<br>\n            "
        )

        blocks.append(f"""        <div class="vaga-card">
          <div class="vaga-card__header">
            <h3 class="vaga-card__title">{title}</h3>
            <span class="vaga-card__date">{date}</span>
          </div>
          <p class="vaga-card__desc">
            {desc}
          </p>
        </div>""")

    return "\n\n".join(blocks)

# ---------------------------------------------------------------------
# Atualização do arquivo destino
# ---------------------------------------------------------------------
def update_target_html(target_file, jobs_html):
    with open(target_file, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(
        r'(<div class="vagas-list">\s*)(.*?)(\s*</div>\s*<!-- COPY DE URGÊNCIA -->)',
        re.DOTALL,
    )

    match = pattern.search(content)
    if not match:
        raise RuntimeError(
            'Não foi possível localizar <div class="vagas-list">.'
        )

    new_content = (
        content[:match.start()]
        + match.group(1)
        + "\n"
        + jobs_html
        + "\n"
        + match.group(3)
        + content[match.end():]
    )

    # Atualiza comentário opcional, se existir:
    # <!-- VAGAS AUTO UPDATE: 15/05/2026 -->
    hoje = datetime.now().strftime("%d/%m/%Y")
    new_content = re.sub(
        r"(<!-- VAGAS AUTO UPDATE: )(.*?)( -->)",
        rf"\1{hoje}\3",
        new_content,
    )

    with open(target_file, "w", encoding="utf-8") as f:
        f.write(new_content)


# ---------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------
def main():
    if len(sys.argv) != 2:
        print("Uso: python3 atualizar_vagas.py arquivo.html")
        sys.exit(1)

    target_file = sys.argv[1]

    jobs = fetch_latest_jobs(limit=3)
    jobs_html = build_jobs_html(jobs)
    update_target_html(target_file, jobs_html)

    print(f"✓ {len(jobs)} vagas atualizadas em {target_file}")

    for i, job in enumerate(jobs, 1):
        print(f"{i}. {job['title']} ({job['date']})")


if __name__ == "__main__":
    main()
