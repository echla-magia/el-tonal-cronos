# CRONOS — Archivo Documental de Guerra (El Tonal del León)

Archivo documental de investigación (Israel-Palestina y geopolítica mundial) con método probatorio: evidencia, relaciones, fuentes y grados de certeza. **No almacena conclusiones: almacena lo necesario para construirlas o refutarlas.**

## Entidades
- **PERSONAS** (101): figuras con foto, rol, nacionalidad, certeza ([CONFIRMADO]/[PROBABLE]/[HIPÓTESIS]/[NO VERIFICADO]) y estado de revisión.
- **ORGANIZACIONES** (10): con logo oficial + **guía documental** vinculada (AIPAC, IDF, CUFI, NSO, NRA, CIA, FBI, Mossad, Palantir).
- **VIDEOS / AFIRMACIONES / RELACIONES** y **ORGANIGRAMAS** por país.
- **GUÍAS** (Archivos de Guerra): infografías documentales (CIA, FBI, Mossad, NSO, Palantir, Complejo Militar-Industrial, Fondos, Lobby/Think Tanks).

## Vistas / Pestañas
Inicio · Personas · Organizaciones · Afirmaciones · Cronología · Grafo · **Organigrama** · Analizar · Investigador · Todos.

## Estructura
```
archivo_documental_osint/
├─ docs/04_prototipo/
│   ├─ index.html          (TODO el front: db_seed + funciones, JS inline)
│   ├─ img/                (fotos personas, logos orgs, guías ag_*, organigramas)
│   └─ index_bak_*.html    (respaldo: restaurar ante rotura — validar node --check)
├─ data/db_seed_v01.js     (seed original: videos/cuentas)
├─ scripts/                (transcribir, integrar personajes, enriquecer imágenes)
└─ .gitignore              (excluye videos/media/voces/ogg/mp4)
```

## ⚠️ Pitfalls clave
1. **El JS va inline en `index.html`** (una sola `<script>` o dos: db_seed + funciones). Tras cada edición **validar con `node --check`** el script completo.
2. **Nunca reemplazar bloques con `s[:i]+nuevo+s[j:]` si `j` es el siguiente `\nfunction`** (borra funciones adyacentes). Usar rangos exactos.
3. **Imágenes**: extensiones de archivo deben coincidir con el formato real (PNG/JPEG). Antes: guías y organigramas eran JPEG con extensión `.png` → el navegador las rechazaba (imágenes rotas). Verificar con PIL; **renombrar a archivo nuevo** al actualizar un logo (evita caché).
4. **Caché del backend**: tras editar `index.html` del CRONOS, reiniciar `python main.py` en `backend/`.
5. CRONOS se muestra **in-page** (iframe `/cronos`), no `window.open`.

## Estados (honestidad)
Subir a CORROBORADO **solo figuras públicas reales verificables**; mantener REPORTADO para acusaciones/supuestos no probados y figuras oscuras. No inflar niveles de certeza; distinguir siempre centralidad ≠ poder.

## Repo Git
Este es un repositorio Git separado del CAZADOR. El código y datos se versionan; los **videos/media quedan excluidos** (`.gitignore`) por tamaño. Respaldo del expidiante documental completo en `Downloads\CRONOS`.

## Fuente del método
Expediente de arranque: `C:\Users\USUARIO\Downloads\expediente_sombras_israel_2026-08-29\` — 143 videos/fragmentos documentales en 11 carpetas bajo `Downloads`.
