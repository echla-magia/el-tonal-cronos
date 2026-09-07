# -*- coding: utf-8 -*-
"""Transcribe un lote de videos con faster-whisper (modelo small)."""
import json, os, sys, time
from faster_whisper import WhisperModel

VIDEOS = json.load(open(sys.argv[1], encoding="utf-8"))  # lista de rutas
OUT_DIR = sys.argv[2] if len(sys.argv) > 2 else "."
MODEL = sys.argv[3] if len(sys.argv) > 3 else "small"

print("Cargando modelo", MODEL, "...")
model = WhisperModel(MODEL, device="cpu", compute_type="int8")
print("Modelo listo.")

os.makedirs(OUT_DIR, exist_ok=True)
results = {}
for i, vpath in enumerate(VIDEOS, 1):
    base = os.path.splitext(os.path.basename(vpath))[0]
    out_path = os.path.join(OUT_DIR, base + ".txt")
    if os.path.exists(out_path) and os.path.getsize(out_path) > 50:
        results[base] = "skipped(existe)"
        print(f"[{i}/{len(VIDEOS)}] {base}: ya existe, saltando")
        continue
    t0 = time.time()
    try:
        segments, info = model.transcribe(vpath, beam_size=3, vad_filter=True)
        txt = "".join(s.text for s in segments).strip()
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(txt)
        results[base] = "ok(%.1fs, %d chars)" % (time.time() - t0, len(txt))
        print(f"[{i}/{len(VIDEOS)}] {base}: {results[base]}")
    except Exception as e:
        results[base] = "ERR: " + str(e)
        print(f"[{i}/{len(VIDEOS)}] {base}: ERROR {e}")

json.dump(results, open(os.path.join(OUT_DIR, "_transcripcion_resultados.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("DONE")