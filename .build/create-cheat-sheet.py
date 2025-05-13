import os
import shutil
import sys
import unicodedata

def find_project_root(start_path):
    current = os.path.abspath(start_path)
    while True:
        if os.path.isfile(os.path.join(current, "package.json")):
            return current
        parent = os.path.dirname(current)
        if parent == current:
            raise FileNotFoundError("package.json introuvable en remontant l'arborescence.")
        current = parent

def normalize(name):
    return unicodedata.normalize('NFKD', name).encode('ASCII', 'ignore').decode().lower()

def file_exists_similar(directory, filename):
    target_norm = normalize(filename)
    for f in os.listdir(directory):
        if normalize(f) == target_norm:
            return f
    return None

def copy_file(source, destination, relative_path):
    if os.path.exists(destination):
        print(f"🔸 Fichier déjà présent : {relative_path}")
    else:
        similar = file_exists_similar(os.path.dirname(destination), os.path.basename(destination))
        if similar:
            print(f"⚠️  Fichier similaire déjà présent (accents/casse) : {os.path.join(os.path.dirname(relative_path), similar)}")
        else:
            shutil.copyfile(source, destination)
            print(f"✅ Fichier copié : {relative_path}")

def main(index_md_path):
    index_md_path = os.path.abspath(index_md_path)
    if not os.path.isfile(index_md_path):
        print("Fichier index.md non trouvé.")
        sys.exit(1)

    project_root = find_project_root(index_md_path)
    rel_path = os.path.relpath(index_md_path, project_root)
    index_dir = os.path.dirname(index_md_path)
    parent_name = os.path.basename(index_dir)

    # Préparer le dossier de destination dans static/
    dest_dir_rel = os.path.join("static", os.path.dirname(rel_path))
    dest_dir_abs = os.path.join(project_root, dest_dir_rel)
    os.makedirs(dest_dir_abs, exist_ok=True)

    # Étape 1 : chercher un *_aide-mémoire.markdown
    md_source = None
    md_target_name = None
    for f in os.listdir(index_dir):
        if f.endswith("_aide-mémoire.markdown"):
            full = os.path.join(index_dir, f)
            if os.path.isfile(full):
                md_source = full
                md_target_name = os.path.splitext(f)[0] + ".markdown"
                print(f"🔍 Aide-mémoire détecté : {f}")
                break

    # Étape 2 : déterminer nom et source du .md
    if not md_source:
        md_source = index_md_path
        md_target_name = f"{parent_name}_aide-mémoire.markdown"

    final_md_path = os.path.join(dest_dir_abs, md_target_name)
    rel_md_path = os.path.join(dest_dir_rel, md_target_name)
    copy_file(md_source, final_md_path, rel_md_path)

    # Étape 3 : copier le PDF correspondant (même base que fichier md final)
    pdf_name = os.path.splitext(md_target_name)[0] + ".pdf"
    pdf_source = os.path.join(index_dir, pdf_name)
    if os.path.isfile(pdf_source):
        final_pdf_path = os.path.join(dest_dir_abs, pdf_name)
        rel_pdf_path = os.path.join(dest_dir_rel, pdf_name)
        copy_file(pdf_source, final_pdf_path, rel_pdf_path)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage : python script.py chemin/vers/index.md")
    else:
        main(sys.argv[1])
