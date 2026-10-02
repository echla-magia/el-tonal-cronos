# -*- coding: utf-8 -*-
"""Actualiza CRONOS (db_seed_v01.js + index.html) con el lote del 23-sep-2026
(pistas 080-087, CLM 110-131). Anexa al final => sintaxis JS intacta.
"""
import os, re, shutil, subprocess, datetime

BASE = r"C:/Users/USUARIO/Downloads/CRONOS/archivo_documental_osint"
SEED = os.path.join(BASE, "data", "db_seed_v01.js")
HTML = os.path.join(BASE, "docs", "04_prototipo", "index.html")
TS = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")

# ---------- utilidades ----------
def jstr(s):
    return '"' + str(s).replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ").replace("\r", " ").strip() + '"'

def cad(key, val):
    return "  %s: %s" % (key, jstr(val))

def aplist(key, vals):
    return "  %s: [%s]" % (key, ", ".join(vals))

# ---------- NUEVAS PERSONAS ----------
persons = [
  {"id":"PER-000133","name":"Masoud Pezeshkian","original":"مسعود پزشکیان",
   "roles":["Presidente de la República Islámica de Irán (2024-)"],"nationality":"Iraní",
   "bio":"Presidente de Irán. En la AGNU del 23-sep-2026 mostró fotos de niños y atribuyó bombardeos a armas de EEUU e Israel; advirtió a Trump que Irán no se doblegará. (PISTA-083/085)","img":"#","certainty":"DOCUMENTADO (discurso AGNU)","review":"PENDIENTE","refs":["SRC-000004"]},
  {"id":"PER-000134","name":"Marco Rubio","roles":["Secretario de Estado de EEUU","ex-senador (R-FL)"],"nationality":"Estadounidense",
   "bio":"Nombrado en audio filtrado de AIPAC (Tucker Carlson, PISTA-087) como una de las 'líneas de vida' del lobby israelí en la administración.","img":"#","certainty":"REPORTADO (fuente anónima)","review":"PENDIENTE","refs":["SRC-000004"]},
  {"id":"PER-000135","name":"John Ratcliffe","roles":["Director de Inteligencia Nacional de EEUU"],"nationality":"Estadounidense",
   "bio":"Nombrado en audio filtrado de AIPAC (PISTA-087) como 'línea de vida' del lobby israelí en la administración.","img":"#","certainty":"REPORTADO (fuente anónima)","review":"PENDIENTE","refs":["SRC-000004"]},
  {"id":"PER-000136","name":"Mike Waltz","roles":["Consejero de Seguridad Nacional de EEUU"],"nationality":"Estadounidense",
   "bio":"Nombrado en audio filtrado de AIPAC (PISTA-087) como 'línea de vida' del lobby israelí en la administración.","img":"#","certainty":"REPORTADO (fuente anónima)","review":"PENDIENTE","refs":["SRC-000004"]},
  {"id":"PER-000137","name":"Paul Singer","roles":["Inversor, fundador Elliott Management"],"nationality":"Estadounidense",
   "bio":"Descrito por Tucker Carlson (PISTA-087) como 'magnate Israel-first' cuyas donaciones habrían impulsado la carrera de Marco Rubio.","img":"#","certainty":"REPORTADO (opinión comentarista)","review":"PENDIENTE","refs":["SRC-000004"]},
]

# ---------- NUEVA FUENTE ----------
fuente = {"id":"SRC-000004","name":"Redes sociales X/YouTube — lote 23-sep-2026","type":"red social / clip",
          "url":"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\expediente_sombras_israel_2026-08-29\\\\_fichas\\\\",
          "accessed":"2026-09-23","note":"Pistas PISTA-080 a 087 archivadas en la ficha y el inventario del expediente (X + YouTube Shorts)."}

# ---------- NUEVAS AFIRMACIONES (CLM-110..131) ----------
# (id, author_id, author_name, text, status, confidence, tema, fuente_url)
C = [
 ("CLM-000110","","Residente de Palm Beach","Residente en la Comisión del Condado de Palm Beach: 'I strongly oppose extending the Israeli bond investment, both fiscally unsound as Israeli bonds are not AA rated', oponiéndose a ~USD 1000M en bonos israelíes. (PISTA-080)","DOCUMENTADO",75,"Financiamiento público a Israel (EEUU local)","https://x.com/DanielGilr44222/status/2102465770882056203"),
 ("CLM-000111","","Comisionado de Palm Beach","Comisionado del Condado: 'We are not setting any policies regarding Israeli bonds tonight. We are only discussing the budget', matizando que la sesión era de presupuesto, no de bonos. (PISTA-080)","DOCUMENTADO",90,"Presupuesto público","https://x.com/DanielGilr44222/status/2102465770882056203"),
 ("CLM-000112","","Presidente de la sesión (Palm Beach)","'This is your last warning. If you clap again, we're going to ask you to be removed. Sir, you're removed', ordenando retirar a un asistente por aplaudir. (PISTA-080)","DOCUMENTADO",85,"Procedimiento público","https://x.com/DanielGilr44222/status/2102465770882056203"),
 ("CLM-000113","","Narrador de video (archivo)","Narración en árabe: 'Los pilotos iraníes encontraron objetivos fáciles ante ellos, incluida Bagdad, que no está a más de 6 minutos de la frontera' (video de la guerra Irán-Irak). (PISTA-081)","REPORTADO",40,"Irán-Irak","https://x.com/DaniMayakovski/status/2102396835419541970"),
 ("CLM-000114","","Daniel Mayakovski","'Durante la guerra contra el pueblo iraní, Irak lanzó más de 350 ataques químicos a gran escala... los materiales fueron suministrados por corporaciones alemanas, francesas y holandesas'. (PISTA-081)","PROBABLE",55,"Irán-Irak-químico","https://x.com/DaniMayakovski/status/2102396835419541970"),
 ("CLM-000115","","Daniel Mayakovski","'La misma EEUU que hablaría de Sadam como dictador... financió y armó al propio Sadam en 1980 para que invadiese y arrasara a Irán'. (PISTA-081)","PROBABLE",60,"EEUU-Irán-Irak","https://x.com/DaniMayakovski/status/2102396835419541970"),
 ("CLM-000116","","Daniel Mayakovski","'EEUU derribó con misiles tierra-aire el Vuelo 655 de Iran Air, matando a 290 civiles' (agosto 1988). (PISTA-081)","DOCUMENTADO",80,"EEUU-Irán","https://x.com/DaniMayakovski/status/2102396835419541970"),
 ("CLM-000117","","Residente israelí (testigo)","Testimonio: 'Suddenly, boom, we see... It was clear to me that there was a tank... I ran away from the tank' (reportaje Canal 12, 7-oct). (PISTA-082)","TESTIMONIO",50,"7-Oct / fuego amigo","https://x.com/RedCollectiveUK/status/2102083350320103502"),
 ("CLM-000118","","Residente israelí (testigo)","Testimonio en reportaje del Canal 12 (encabezado hebreo: 'Exclusive footage | The tank that fired towards the sons of...'): 'Half an hour later, the police arrived... the first help after the tank ran away'. (PISTA-082)","TESTIMONIO",55,"7-Oct / respuesta de autoridades","https://x.com/RedCollectiveUK/status/2102083350320103502"),
 ("CLM-000119","PER-000133","Masoud Pezeshkian","Presidente de Irán en la AGNU: '¿Ven estos niños? Estos niños murieron bajo las bombas con armas utilizadas por los Estados Unidos e Israel'. (PISTA-083)","DISCURSO",70,"EEUU-Irán-ONU","https://x.com/catrina_nortena/status/2102774914658783552"),
 ("CLM-000120","PER-000133","Masoud Pezeshkian","Presidente de Irán: 'Ellos bombardearon una escuela... un salón de deportes donde los niños estaban cansados de jugar... asesinaron a nuestros científicos, hombres, mujeres y niños'. (PISTA-083)","DISCURSO",60,"EEUU-Irán","https://x.com/catrina_nortena/status/2102774914658783552"),
 ("CLM-000121","","Narración AJ+ Español","AJ+ (Al Jazeera): 'Los palestinos llaman a esos drones zennane... Israel lleva utilizando drones sobre Gaza desde principios de los años 2000'. (PISTA-084)","PROBABLE",60,"Gaza-drones","https://youtube.com/shorts/PDtgODWsbGU"),
 ("CLM-000122","","Narración AJ+ Español","AJ+ (Al Jazeera): 'Algunos drones israelíes hasta llegaron a reproducir grabaciones de bebés llorando o niños pidiendo ayuda para atraer a civiles y convertirlos en blancos'. —AFIRMACIÓN GRAVE, requiere fuente independiente. (PISTA-084)","NO_VERIFICADO",30,"Gaza-drones","https://youtube.com/shorts/PDtgODWsbGU"),
 ("CLM-000123","","Narración AJ+ Español","AJ+ (Al Jazeera): 'Pese al supuesto alto al fuego, Israel está utilizando los drones como una forma de terror/provocación'. (PISTA-084)","POSIBLE",35,"Gaza-tregua","https://youtube.com/shorts/PDtgODWsbGU"),
 ("CLM-000124","PER-000133","Masoud Pezeshkian","Presidente de Irán (AGNU, farsi): 'Estos niños fueron bombardeados y asesinados con armas de Estados Unidos e Israel... no habían cometido ningún crimen'. (PISTA-085)","DISCURSO",65,"EEUU-Irán-ONU","https://youtube.com/shorts/D_pNU1j4vIY"),
 ("CLM-000125","PER-000133","Masoud Pezeshkian","Presidente de Irán: 'Ellos bombardearon el salón de deportes con bombas de racimo que se fragmentaron en miles' (incidente no verificado independientemente). (PISTA-085)","DISCURSO",55,"EEUU-Irán","https://youtube.com/shorts/D_pNU1j4vIY"),
 ("CLM-000126","PER-000133","Masoud Pezeshkian","Presidente de Irán: 'Irán nunca ha iniciado ninguna guerra... Irán nunca se arrodillará'. (PISTA-085)","DISCURSO",75,"EEUU-Irán","https://youtube.com/shorts/D_pNU1j4vIY"),
 ("CLM-000127","","Locutor Intereconomía News","Intereconomía: 'Japón trasladó a Donald Trump la posición de Japón sobre varios asuntos relacionados con China, incluida la seguridad económica'. (PISTA-086)","REPORTADO",55,"Asia-EEUU-China","https://youtube.com/shorts/KUAo_HE2pk4"),
 ("CLM-000128","","Locutor Intereconomía News","Intereconomía: 'El diálogo se celebró al margen de la AGNU, persisten tensiones en torno a Taiwán; Japón y EEUU acordaron coordinación estrecha; Xi Jinping llegará un día después'. (PISTA-086)","REPORTADO",50,"Asia-EEUU-China-Taiwán","https://youtube.com/shorts/KUAo_HE2pk4"),
 ("CLM-000129","","Fuente anónima (autodenominado veterano de AIPAC)","Audio filtrado de AIPAC (vía Tucker Carlson): 'John Ratcliffe... Marco Rubio... Mike Waltz... These are our lifelines inside the administration'. (PISTA-087)","NO_VERIFICADO",25,"Lobby-Israel-EEUU","https://youtube.com/shorts/CQQMYp1VRnY"),
 ("CLM-000130","","Tucker Carlson","Comentario: 'Marco Rubio's career has been advanced by Paul Singer's donations, a major Israel-first billionaire'. (PISTA-087)","NO_VERIFICADO",30,"Lobby-Israel","https://youtube.com/shorts/CQQMYp1VRnY"),
 ("CLM-000131","","Fuente anónima (autodenominado veterano de AIPAC)","Audio filtrado de AIPAC: 'Israel will get more or less what it wants'. (PISTA-087)","NO_VERIFICADO",20,"Lobby-Israel","https://youtube.com/shorts/CQQMYp1VRnY"),
]

# ---------- generar BLOQUE JS (para seed y html, ambos con const DB) ----------
bloques = []
bloques.append("// ============================================================")
bloques.append("// LOTE 23-SEP-2026 — PISTAS 080-087 (X + YouTube). Ingesta Atenea.")
bloques.append("// Fuente: " + fuente["url"])
bloques.append("// ============================================================")
bloques.append("DB.sources.push({\n" + cad("id", fuente["id"]) + ",\n" + cad("name", fuente["name"]) + ",\n" + cad("type", fuente["type"]) + ",\n" + cad("url", fuente["url"]) + ",\n" + cad("accessed", fuente["accessed"]) + ",\n" + cad("note", fuente["note"]) + "\n});")
for p in persons:
    r = "DB.persons.push({\n"
    r += cad("id", p["id"]) + ",\n" + cad("name", p["name"]) + ",\n" + cad("original", p.get("original", ""))
    r += ",\n" + aplist("roles", [jstr(x) for x in p["roles"]]) + ",\n" + cad("nationality", p["nationality"])
    r += ",\n" + cad("bio", p["bio"]) + ",\n" + cad("img", p["img"]) + ",\n" + cad("certainty", p["certainty"])
    r += ",\n" + cad("review", p["review"]) + ",\n" + aplist("refs", [jstr(x) for x in p["refs"]])
    r += "\n});"
    bloques.append(r)
for c in C:
    cid, auth, aname, text, status, conf, tema, url = c
    r = "DB.claims.push({\n"
    r += cad("id", cid) + ",\n" + cad("text", text) + ",\n" + cad("author", auth) + ",\n" + cad("author_name", aname)
    r += ",\n" + cad("contra", "") + ",\n" + cad("video_file", "") + ",\n" + cad("source_url", url)
    r += ",\n" + cad("tema", tema) + ",\n" + cad("status", status) + ",\n  confidence:" + str(conf)
    r += ",\n" + cad("reviewed", "PENDIENTE") + ",\n  srcs:[\"SRC-000004\"]"
    r += "\n});"
    bloques.append(r)
nuevo_js = "\n".join(bloques) + "\n"

# ---------- aplicar a SEED ----------
shutil.copy(SEED, SEED + ".bak_" + TS)
s = open(SEED, encoding="utf-8").read().rstrip() + "\n\n" + nuevo_js
open(SEED, "w", encoding="utf-8").write(s)

# ---------- aplicar a HTML (antes del último </script>) ----------
shutil.copy(HTML, HTML.replace("index.html", "index_bak_lotesep_" + TS + ".html"))
h = open(HTML, encoding="utf-8").read()
marker = "</script>"
idx = h.rfind(marker)
h = h[:idx] + nuevo_js + "\n" + h[idx:]
open(HTML, "w", encoding="utf-8").write(h)

print("AÑADIDOS:", len(persons), "personas |", len(C), "claims | 1 fuente")
print("BLOQUE chars:", len(nuevo_js))

# ---------- validación sintaxis ----------
def node_check(path):
    r = subprocess.run(["node", "--check", path], capture_output=True, text=True)
    return r.returncode == 0, r.stderr[:300]

ok_seed, err_seed = node_check(SEED)
print("node --check SEED:", "OK" if ok_seed else "ERR: " + err_seed)

# extraer <script> del html y chequearlo
m = re.search(r"<script>(.*?)</script>\s*</body>", h, re.S)
ok_html = False
if m:
    tmp = os.path.join(BASE, "_html_script_check.js")
    open(tmp, "w", encoding="utf-8").write(m.group(1))
    ok_html, err_html = node_check(tmp)
    print("node --check HTML<script>:", "OK" if ok_html else "ERR: " + err_html)
else:
    print("No se pudo aislar <script> final del HTML")