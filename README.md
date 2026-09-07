# CRONOS — Archivo Documental OSINT
## Prototipo navegable (Fases 1–4 y 6 del Prompt Maestro)

### 🚀 Cómo abrir el prototipo
Abre este archivo en tu navegador (doble clic):
```
docs/04_prototipo/index.html
```
No requiere servidor ni instalación: es autónomo (carga sus datos de
`data/db_seed_v01.js`).

### 📁 Estructura del proyecto
```
archivo_documental_osint/
├── docs/
│   ├── 01_fase1_erd/
│   │   ├── ERD_archivo_documental_v01.md       ← Documento maestro FASE 1
│   │   ├── ERD_diagrama_v01.html               ← Diagrama visual del modelo
│   │   └── ERD_diagrama_v01.md                 ← Versión Mermaid (portable)
│   └── 04_prototipo/
│       └── index.html                          ← Prototipo web navegable
├── data/
│   └── db_seed_v01.js                          ← Base semilla (FASE 2)
├── scripts/
│   └── schema_v01.sql                          ← Esquema PostgreSQL completo
└── evidencia/                                  ← (reservado para archivos maestros)
```

### ✅ Qué funciona en el prototipo
- **Búsqueda universal** en tiempo real (barra superior): prueba "Netanyahu", "AIPAC", "Gaza", "Kushner".
- **Fichas enciclopédicas** de personas, organizaciones, videos, afirmaciones y fuentes,
  con **hipervínculos internos pulsables** (patrón Wikipedia).
- **Cronología doble** (histórica + documental).
- **Grafo de relaciones** interactivo (nodos pulsables; líneas rojas = lobby/contrato).
- **Organigramas institucionales** (EE.UU.: ejecutivo/legislativo/judicial).
- **Mapa mundial** de acontecimientos (Gaza/Israel, EE.UU., México-Pegasus).
- **Análisis audiovisual** con clases A–F + checklist forense.
- **Ingesta automática**: pega una URL, la IA propone ficha preliminar (el humano valida).
- **Panel del investigador** con conteos de pendientes y filtros avanzados.
- **Etiquetas de certeza** y **estatus de revisión** en cada registro.
- **Regla de oro** visible: toda relación exige fuente.

### 🔎 Datos semilla cargados (FASE 2 — muestra real, ampliada)
- **10 personas**: Netanyahu, Trump, Feiglin, Halevi, Finkelstein, Carlson, Cruz, Kushner, Abdelhadi, Golan.
- **5 organizaciones**: AIPAC, IDF, CUFI, Clock Tower X LLC, NSO Group.
- **21 videos** (los que Christo ha ido pasando), **3 afirmaciones**, **2 eventos**, **3 fuentes**, **6 relaciones**.

> ⚠️ **Importante (principio probatorio):** estos son DATOS SEMILLA de muestra para probar la
> arquitectura. La IA propone; el humano valida. Cada certeza ("REPORTADO", "CORROBORADO…")
> es una clasificación provisional que puede cambiar con nueva evidencia. Nada aquí es un
> "hecho consumado".

### 🗂️ Estado del roadmap
| Fase | Contenido | Estado |
|---|---|---|
| 1 | ERD + esquema | ✅ Completada |
| 2 | Base semilla / datos | ✅ Completada (muestra) |
| 3 | Interfaz enciclopédica + hipervínculos | ✅ Completada (prototipo) |
| 4 | Timeline doble | ✅ Completada (prototipo) |
| 5 | Organigramas institucionales | ✅ Completada (prototipo) |
| 6 | Grafo de relaciones | ✅ Completada (prototipo) |
| 7 | Mapa mundial | ✅ Completada (prototipo) |
| 8 | Análisis audiovisual (A–F + forense) | ✅ Completada (prototipo) |
| 9 | Ingesta automática con IA (propone) | ✅ Completada (prototipo) |
| 10 | Dashboard investigador + filtros OSINT | ✅ Completada (prototipo) |

---
*Generado por Atenea (perfil academia) · 2026-09-03 · Proyecto de Christo*