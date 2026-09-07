# -*- coding: utf-8 -*-
"""Reintenta imagenes para personajes que fallaron (rate-limit o nombre alternativo)."""
import subprocess, os, json, time, urllib.parse, re

imgdir = r"C:\Users\USUARIO\Downloads\archivo_documental_osint\docs\04_prototipo\img"

objetivos = {
    "Enrique Pena Nieto": ("enrique_pena_nieto", "Enrique_Pena_Nieto"),
    "Avishay Neriah": ("avishay_neriah", None),
    "Uri Ansbacher": ("uri_ansbacher", None),
    "Sebastian Salgado": ("sebastian_salgado", None),
    "Ben-Gurion": ("ben_gurion", "David_Ben-Gurion"),
    "Yosef Basri": ("yosef_basri", None),
   "Rupert Butler": ("rupert_butler", None),
   "Julian Macias Tovar": ("julian_macias", None),
   "Jesse Lyons": ("jesse_lyons", None),
   "Ibrahim Al-Matari": ("ibrahim_al_matari", None),
   "Henry H. Klein": ("henry_klein", None),
   "Ignacio Gonzalez": ("ignacio_gonzalez", None),
   "Mark Weber": ("mark_weber", "Mark_Weber_(writer)"),
   "Steve Cohen": ("steve_cohen", None),
   "Amichai Chikli": ("amichai_chikli", "Amichai_Chikli"),
}

def seedname_of(name):
    if name == "Amichai Chikli":
        return "Amichai Chikli (Ami Khailahu)"
    if name == "Ibrahim Al-Matari":
        return "Ibrahim Al-Matari (د ابراهيم المطري)"
    if name == "Enrique Pena Nieto":
        return "Enrique Peña Nieto"
    if name == "Sebastian Salgado":
        return "Sebastián Salgado"
    if name == "Ignacio Gonzalez":
        return "Ignacio González"
    if name == "Julian Macias Tovar":
        return "Julián Macías Tovar"
    return name

def rest_summary(page):
    t = urllib.parse.quote(page)
    url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + t
    r = subprocess.run(["curl", "-s", "--max-time", "25", "-A", "CRONOS-research/1.0", url], capture_output=True, text=True, timeout=32)
    try:
        d = json.loads(r.stdout)
    except:
        return ("BADJSON", None)
    if "title" not in d:
        return ("MISS", None)
    th = d.get("thumbnail", {}).get("source") or d.get("originalimage", {}).get("source")
    return ("OK", th)

def dl(slug, url):
    low = url.lower()
    ext = ".svg" if ".svg" in low else (".png" if ".png" in low else ".jpg")
    path = os.path.join(imgdir, slug + ext)
    if os.path.exists(path) and os.path.getsize(path) > 400:
        return path, "cached"
    clean = url.split("?")[0]
    subprocess.run(["curl", "-sL", "--max-time", "40", "-A", "Mozilla/5.0 (educational research) CRONOS", "-o", path, clean], capture_output=True, text=True, timeout=60)
    sz = os.path.getsize(path) if os.path.exists(path) else 0
    return path, (f"ok {sz}b" if sz > 400 else f"FAIL{sz}b")

def update_seed_img(name, relpath):
    sp = r"C:\Users\USUARIO\Downloads\archivo_documental_osint\data\db_seed_v01.js"
    s = open(sp, encoding="utf-8").read()
    m = re.search(r'(\{\s*\n\s*id: "(PER-\d+)", name: "[^"]*' + re.escape(name) + r'"[^}]*?img: )"#"', s, re.S)
    if m:
        s = s[:m.start(1)] + m.group(1) + '"' + relpath + '"' + s[m.end(1):]
        open(sp, "w", encoding="utf-8").write(s)
        return True
    return False

for name, (slug, page) in objetivos.items():
    pagename = page or name.replace(" ", "_")
    st, img = rest_summary(pagename)
    ok = False
    fp = ""
    if st == "OK" and img:
        fp, dlst = dl(slug, img)
        ok = ("FAIL" not in dlst)
        if ok:
            update_seed_img(seedname_of(name), "img/" + os.path.basename(fp))
    print(name, "->", st, (os.path.basename(fp) if ok else ""))
    time.sleep(4)

print("DONE")