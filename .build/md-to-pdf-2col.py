import sys
from pathlib import Path
import requests

API_URL = "https://md-to-pdf.fly.dev"
CSS_FILE = Path(__file__).parent / "md-to-pdf.css"

def process_markdown(filepath):
    input_path = Path(filepath)
    output_path = input_path.with_suffix(".mdtmp")

    with input_path.open("r", encoding="utf-8") as f:
        lines = f.readlines()

    output_lines = []
    inserted_opening = False
    last_hr_index = None

    # Repérer l'index du dernier ---
    for i, line in enumerate(lines):
        if line.strip() == "---":
            last_hr_index = i

    # Construction du haut jusqu'au footer
    for i, line in enumerate(lines):
        if not inserted_opening and line.startswith("# "):
            output_lines.append(line)
            output_lines.append("\n")
            output_lines.append('<div class="columns">\n\n')
            inserted_opening = True
            continue

        if i == last_hr_index:
            output_lines.append("\n</div>\n\n")
            continue

        if i < last_hr_index:
            output_lines.append(line)

    # Footer
    footer_lines = lines[last_hr_index + 1:]
    if footer_lines:
        output_lines.append('<div class="footer">\n\n')
        output_lines.extend(footer_lines)
        output_lines.append('\n</div>\n')

    with output_path.open("w", encoding="utf-8") as f:
        f.writelines(output_lines)

    print(f"✅ Fichier transformé : {output_path}")
    return output_path

def convert_to_pdf(md_path):
    pdf_path = md_path.with_suffix(".pdf")

    # Lire le markdown
    with md_path.open("r", encoding="utf-8") as f:
        markdown_content = f.read()

    # Lire le CSS
    if not CSS_FILE.exists():
        print(f"❌ Feuille de style non trouvée : {CSS_FILE}")
        sys.exit(1)

    with CSS_FILE.open("r", encoding="utf-8") as f:
        css_content = f.read()

    # Envoyer à l'API
    response = requests.post(
        API_URL,
        data={
            "markdown": markdown_content,
            "css": css_content
        }
    )

    if response.status_code == 200:
        with pdf_path.open("wb") as f:
            f.write(response.content)
        print(f"✅ PDF généré : {pdf_path}")
    else:
        print(f"❌ Erreur de conversion PDF : {response.status_code}\n{response.text}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage : python add_columns_wrapper.py <fichier.md>")
        sys.exit(1)

    mdtmp_path = process_markdown(sys.argv[1])
    convert_to_pdf(mdtmp_path)
