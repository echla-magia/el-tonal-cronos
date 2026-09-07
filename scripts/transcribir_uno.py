# -*- coding: utf-8 -*-
import sys
from faster_whisper import WhisperModel
vpath=sys.argv[1]
out=sys.argv[2]
model=WhisperModel("base",device="cpu",compute_type="int8")
segments,info=model.transcribe(vpath,beam_size=3,vad_filter=True)
txt="".join(s.text for s in segments).strip()
open(out,"w",encoding="utf-8").write(txt)
print(f"OK {len(txt)} chars | dur={info.duration:.1f}s | lang={info.language}")