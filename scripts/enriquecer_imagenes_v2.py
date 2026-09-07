import json, os, re, time, subprocess, unicodedata

BASE = r"C:\Users\USUARIO\Downloads\CRONOS"
IMG = r"C:\Users\USUARIO\Downloads\CRONOS\archivo_documental_osint\docs\04_prototipo\img"
os.makedirs(IMG, exist_ok=True)

# nombre -> titulo de articulo en en.wikipedia (cobertura maxima)
TITLES = {
 "Rodrigo Paz Pereira":"Rodrigo Paz Pereira",
 "Jacobo Árbenz":"Jacobo Árbenz","João Goulart":"João Goulart","Salvador Allende":"Salvador Allende",
 "Juan Bosch":"Juan Bosch (politician)","Omar Torrijos":"Omar Torrijos",
 "Recep Tayyip Erdogan":"Recep Tayyip Erdoğan","Raul Hilberg":"Raul Hilberg",
 "Mohammad Mossadegh":"Mohammad Mosaddegh","Kermit Roosevelt":"Kermit Roosevelt Jr.",
 "Piers Morgan":"Piers Morgan","Marjorie Taylor Greene":"Marjorie Taylor Greene",
 "Arthur Koestler":"Arthur Koestler","Rey Bulán":"Bulan (Khazar)","Rey Canuto":"Cnut",
 "Barack Obama":"Barack Obama","Tony Blair":"Tony Blair","Gordon Brown":"Gordon Brown",
 "John Swinney":"John Swinney","Theodore Kaufman":"Theodore Kaufman","Rashida Tlaib":"Rashida Tlaib",
 "Scott Bessent":"Scott Bessent","William Blum":"William Blum","Ralph McGehee":"Ralph McGehee",
 "Robert D. Steele":"Robert David Steele","Dick Cheney":"Dick Cheney",
 "Vladímir Putin":"Vladimir Putin","Hillary Clinton":"Hillary Clinton",
 "Michael Chertoff":"Michael Chertoff","Leo Frank":"Leo Frank","Mary Phagan":"Mary Phagan",
 "David Ben-Gurion":"David Ben-Gurion","Amihai Eliyahu":"Amihai Eliyahu",
 "Douglas Tompkins":"Douglas Tompkins","Kristine Tompkins":"Kristine Tompkins",
 "Claudia Sheinbaum":"Claudia Sheinbaum",
}

def slug(n):
    s=unicodedata.normalize('NFKD',n).encode('ascii','ignore').decode()
    return re.sub(r'[^a-z0-9]+','_',s.lower()).strip('_')

UA="CRONOS-enrich/1.0 (research)"

def get(url, timeout=30):
    r=subprocess.run(["curl","-sL","--max-time",str(timeout),"-A",UA,url],capture_output=True,text=True)
    return r.stdout

def resolve_and_download(name):
    title = TITLES.get(name)
    if not title:
        return {"name":name,"title":None,"status":"no_title","img":"#"}
    fn = slug(name)
    ext = ".jpg"
    # REST summary
    url_title = title.replace(" ","_")
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{url_title}"
    img_url=None
    for attempt in range(3):
        try:
            body=get(url)
            d=json.loads(body)
            th = d.get("thumbnail") or d.get("originalimage")
            if d.get("title"):
                pass
            if not d.get("thumbnail") and d.get("originalimage"):
                th={"source":d["originalimage"]["source"]}
            if th and th.get("source"):
                img_url=th["source"]
                break
            # redirected? summary returns resolved title
            nxt = d.get("content_urls") or {}
            de = nxt.get("desktop") or {}
            if de.get("page") and not th:
                # retry with resolved title
                rt = de["page"].rstrip("/").split("/")[-1].replace("_"," ")
                url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{rt.replace(' ','_')}"
                continue
        except Exception as e:
            time.sleep(4)
    if not img_url:
        return {"name":name,"title":title,"status":"no_image","img":"#"}
    # extension
    low=img_url.lower()
    if ".png" in low: ext=".png"
    elif ".svg" in low: ext=".svg"
    path=os.path.join(IMG, fn+ext)
    if not (os.path.exists(path) and os.path.getsize(path)>4000):
        clean=img_url.split("?")[0]
        subprocess.run(["curl","-sL","--max-time","50","-A",UA,"-o",path,clean],capture_output=True,timeout=70)
    sz=os.path.getsize(path) if os.path.exists(path) else 0
    status="ok" if sz>3000 else f"fail({sz}b)"
    rpath=os.path.join("img", fn+ext).replace("\\","/")
    return {"name":name,"title":title,"status":status,"img":rpath,"url":img_url}

personas = json.load(open(BASE+r"\_ingest\_personas_final.json",encoding="utf-8"))["final"]
out={}
for name,per in personas.items():
    r=resolve_and_download(per["name"])
    out[per["name"]]=r
    print(f"[{r['status']}] {per['name']} -> {r['img']}")
    time.sleep(3)

json.dump(out, open(IMG+r"\_wiki_result_personas.json","w",encoding="utf-8"), ensure_ascii=False, indent=1)
ok=sum(1 for r in out.values() if r['status']=='ok')
print(f"\nRESULTADO: {ok}/{len(out)} con imagen")