# -*- coding: utf-8 -*-
"""
CRONOS — Integración de personajes nuevos (con imágenes de Wikipedia)
Uso: node es el validador; la descarga usa curl. Correr con python.
Input: personajes.json (arreglo {name, role, mentions, evidence, links})
Output: actualiza db_seed_v01.js con PER-0000xx nuevos + IMG-xxxxx y descarga imágenes.
"""
import subprocess, os, re, json, sys, time, urllib.parse

IMG_DIR = r"C:\Users\USUARIO\Downloads\archivo_documental_osint\docs\04_prototipo\img"
SEED    = r"C:\Users\USUARIO\Downloads\archivo_documental_osint\data\db_seed_v01.js"

os.makedirs(IMG_DIR, exist_ok=True)

def slugify(name):
    import unicodedata
    s = unicodedata.normalize('NFKD', name).encode('ascii','ignore').decode('ascii')
    s = re.sub(r'[^A-Za-z0-9]+','_',s).strip('_').lower()
    return s or "persona"

def magic_slug(name):
    # imágenes posibles de Wikipedia vía Special:FilePath con nombre de artículo
    return name.replace(' ','_')

def wiki_img_url(person_name, px=480):
    """Devuelve (status, url_imagen, title) buscando en en.wikipedia REST summary."""
    page = person_name.replace(' ','_')
    t = urllib.parse.quote(page)
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{t}"
    r = subprocess.run(["curl","-s","--max-time","25",
        "-A","CRONOS-research/1.0 (educational nonprofit research)", url],
        capture_output=True, text=True, timeout=32)
    try: d = json.loads(r.stdout)
    except: return ("BADJSON", None, None)
    if "title" not in d: return ("MISS", None, None)
    th = d.get("thumbnail",{}).get("source") or d.get("originalimage",{}).get("source")
    return ("OK", th, d.get("title"))

def dl(url, slug):
    low=url.lower()
    ext=".svg" if ".svg" in low else (".png" if ".png" in low else ".jpg")
    path=os.path.join(IMG_DIR, slug+ext)
    if os.path.exists(path) and os.path.getsize(path)>400: return path,"cached"
    clean=url.split("?")[0]
    subprocess.run(["curl","-sL","--max-time","40","-A","Mozilla/5.0 (educational research) CRONOS","-o",path,clean],
                   capture_output=True,text=True,timeout=60)
    sz=os.path.getsize(path) if os.path.exists(path) else 0
    return path, (f"ok {sz}b" if sz>400 else f"FAIL{sz}b")

def parse_seed(data):
    pids = [int(m) for m in re.findall(r'id: "PER-(\d+)', data)]
    return data, (max(pids) if pids else 0)

def find_id_of(seed_data, name):
    m = re.search(r'\{\s*\n\s*id: "(PER-\d+)", name: "'+re.escape(name)+r'"', seed_data, re.S)
    return m.group(1) if m else None

def build_person_obj(pid, p):
    base = f'  id: "{pid}", name: "{p["name"].strip()}",\n  roles: [{json.dumps([p["role"] or "figura pública"], ensure_ascii=False)}],\n  nationality: "?",\n  bio: "{esc("Figura relevante en el conflicto/geopolítica. "+str(p.get("evidence",""))[:300])}",\n  img: "#", certainty: "REPORTADO", review: "PENDIENTE", refs: [\"SRC-000003\"]'
    return base

def esc(s):
    return s.replace('\\','\\\\').replace('"','\\"').replace('\n',' ').replace('\r',' ')

def add_person_to_seed(seed_data, pid, p):
    obj = build_person_obj(pid,p)
    # insertar antes de la línea de ORGANIZACIONES
    marker = "\n// ----------------------------------------------------------------------------\n// ORGANIZACIONES"
    if marker in seed_data:
        ins = obj + "\n});\nDB.persons.push({\n"  # cerrar anterior y abrir siguiente
        # mejor: insertar un nuevo bloque push completo
    return seed_data

def insert_person_push(seed_data, obj):
    # encontrar la última persona push para insertar después; más simple: antes de ORGANIZACIONES
    marker = "\n// ----------------------------------------------------------------------------\n// ORGANIZACIONES"
    push_block = "\nDB.persons.push({\n"+obj+"\n});\n"
    assert marker in seed_data, "marker org no encontrado"
    return seed_data.replace(marker, push_block + marker, 1)

# ---- MAIN ----
def main():
    inp = sys.argv[1] if len(sys.argv)>1 else r"C:\Users\USUARIO\Downloads\archivo_documental_osint\personajes.json"
    lista = json.load(open(inp, encoding='utf-8'))
    if isinstance(lista,dict):
        lista = lista.get("personajes", [])
    seed_data = open(SEED, encoding='utf-8').read()
    # nombres ya existentes en seed
    existentes = {m.group(2): m.group(1) for m in re.finditer(r'id: "(PER-\d+)"[^}]*?name: "([^"]+)"', seed_data, re.S)}
    pids=[int(m) for m in re.findall(r'id: "PER-(\d+)', seed_data)]
    nxt=max(pids) if pids else 0
    added=[]; skipped=[]; img_status=[]
    for p in lista:
        name=p["name"].strip()
        if name.lower() in [e.lower() for e in existentes]:
            skipped.append(name); continue
        nxt+=1
        pid=f"PER-{str(nxt).zfill(6)}"
        obj = build_person_obj(pid,p)
        seed_data = insert_person_push(seed_data, obj)
        existentes[name]=pid
        # imagen
        st,img,tit = wiki_img_url(name)
        if st=="OK" and img:
            slug=slugify(name)
            fp,dlst=dl(img,slug)
            # actualizar img del recién añadido
            seed_data = re.sub(r'(id: "'+pid+r'"[\s\S]*?img: )"#"', r'\1"img/'+os.path.basename(fp)+'"', seed_data, count=1)
            img_status.append((name,"OK",os.path.basename(fp),dlst))
        else:
            img_status.append((name,"NOIMG",None,st))
        added.append(name)
        time.sleep(3)
    open(SEED,"w",encoding="utf-8").write(seed_data)
    print(json.dumps({"agregados":added,"omitidos(existian)":skipped,"imagenes":img_status},ensure_ascii=False,indent=1))

if __name__=="__main__":
    main()