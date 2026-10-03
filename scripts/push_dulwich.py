#!/usr/bin/env python3
# push_dulwich.py — Sincroniza el CRONOS local con el repo GitHub remoto usando dulwich
# (cliente git en Python, no depende del helper https que falta en el git portable de Hermes)
import os, sys, re
from dulwich import porcelain

REPO = r"C:/Users/USUARIO/Downloads/CRONOS/archivo_documental_osint"
AUTH_HINT = os.path.expanduser("~/.git-credentials")

# --- 1. Leer credenciales ---
token = None
username = "echla-magia"
if os.path.exists(AUTH_HINT):
    for line in open(AUTH_HINT, encoding='utf-8'):
        # formato: https://USER:TOKEN@github.com
        m = re.match(r'https://([^:]+):([^@]+)@github\.com', line.strip())
        if m:
            username, token = m.group(1), m.group(2)
            break
if not token:
    print("ERROR: no se encontro token en ~/.git-credentials"); sys.exit(1)

remote_url = f"https://{username}:{token}@github.com/{username}/el-tonal-cronos.git"
print(f"Objetivo: github.com/{username}/el-tonal-cronos (rama main)")

try:
    # --- 2. Hacer commit de cualquier pendiente ---
    porcelain.add(REPO, paths=["."])
    n = porcelain.get_object_by_path  # noop
    # commit si hay cambios
    try:
        porcelain.commit(REPO, message="sync CRONOS V2 (afirmaciones/manifiestos/fondo)")
        print("Commit nuevo creado.")
    except Exception as ec:
        print("Commit: (nada que commitear) ->", str(ec)[:80])

    # --- 3. Push a remoto ---
    result = porcelain.push(REPO, remote_url, refspecs=[b"refs/heads/main"])
    print("\nPUSH COMPLETADO CON EXITO")
    print(f"→ rama: main → {username}/el-tonal-cronos")
except Exception as e:
    print(f"\nERROR DE PUSH: {type(e).__name__}: {e}")
    sys.exit(1)
