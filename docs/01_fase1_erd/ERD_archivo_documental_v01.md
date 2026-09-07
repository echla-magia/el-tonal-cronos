# ARCHIVO DOCUMENTAL DE CONFLICTOS, PODER Y EVIDENCIA AUDIOVISUAL
## FASE 1 — Modelo Entidad-Relación (ERD) y Arquitectura de Datos
> **Versión:** v01 · **Fecha:** 2026-09-03 · **Estado:** PROPUESTA (pendiente de aprobación de Christo)
> **Principio rector:** *"No almacenar conclusiones: almacenar evidencia, relaciones, fuentes y grados de certeza que permitan construir o refutar conclusiones."*

---

## 0. Resumen ejecutivo de la FASE 1

Esta fase define **exactamente cómo se conectan** las entidades centrales del proyecto:
`VID`, `IMG`, `AUD`, `PER`, `ORG`, `GOV`, `EVT`, `CLM`, `SRC`, `DOC`, `LOC`, `REL`, `CNF`, `ART`.

El corazón del modelo es una **tabla de relaciones genérica** (`relationships`) que usa el patrón
**sujeto – predicado – objeto** (subject/predicate/object) para conectar *cualquier* entidad con
*cualquier* otra, sin necesidad de alterar el esquema cuando aparezca un nuevo tipo de vínculo.

**Decisión clave de esta fase:** la relación siempre lleva su propia evidencia, fuente, tipo,
confianza, fechas y estatus. **Nunca** se dibuja una relación sin las pruebas que la sostienen
(principio §38 del Prompt Maestro).

---

## 1. Nomenclatura y prefijos de identificadores universales

Cada entidad tiene un ID permanente con prefijo de tipo + número secuencial de 6 dígitos.

| Prefijo | Entidad | Ejemplo |
|---|---|---|
| `VID-` | Video | `VID-000001` |
| `IMG-` | Imagen / fotografía | `IMG-000001` |
| `AUD-` | Audio | `AUD-000001` |
| `PER-` | Persona | `PER-000001` |
| `ORG-` | Organización | `ORG-000001` |
| `GOV-` | Gobierno / Estado | `GOV-000001` |
| `EVT-` | Evento | `EVT-000001` |
| `CLM-` | Afirmación / Claim | `CLM-000001` |
| `SRC-` | Fuente | `SRC-000001` |
| `DOC-` | Documento | `DOC-000001` |
| `LOC-` | Lugar | `LOC-000001` |
| `REL-` | Relación | `REL-000001` |
| `CNF-` | Conflicto | `CNF-000001` |
| `ART-` | Artículo / investigación | `ART-000001` |

**Regla:** el ID es **permanente** e **inmutable**. Si una entidad se fusiona o se corrige,
sus ID nunca se reutilizan. Se registra en `change_history` la modificación (nunca se borra una
evaluación anterior).

---

## 2. Esquema de base de datos / Entidades centrales

Se propone **PostgreSQL** como base relacional principal (escalable a grafo Neo4j en FASE 6).

### 2.1 Tabla `persons` (PER)
| Campo | Tipo | Notas |
|---|---|---|
| `id` | `uuid` / `serial` | PK |
| `prefixed_id` | `text UNIQUE` | `PER-000001` |
| `full_name` | `text` | Nombre completo |
| `original_name` | `text` | Nombre en idioma original |
| `aliases` | `jsonb` | Alias, apodos |
| `birth_date` | `date` | Puede ser parcial (solo año) |
| `nationality` | `text` | |
| `profession` | `text` | |
| `current_title` | `text` | Cargo actual |
| `bio_summary` | `text` | Biografía resumida |
| `main_image_id` | `uuid` | → `images.id` (foto del rostro) |
| `created_at` / `updated_at` | `timestamptz` | |
| `review_status` | `enum` | AUTOMÁTICO / PENDIENTE / REVISADO / VERIFICADO / DISPUTADO / ARCHIVADO |

### 2.2 Tabla `organizations` (ORG) — incluye governments y orgs armadas
| Campo | Tipo | Notas |
|---|---|---|
| `id` | `uuid` | PK |
| `prefixed_id` | `text UNIQUE` | `ORG-…` o `GOV-…` |
| `name` | `text` | |
| `original_name` | `text` | |
| `country` | `text` | |
| `org_type` | `enum` | GOBIERNO / MINISTERIO / EJÉRCITO / PARTIDO / ONG / EMPRESA / CORPORACIÓN / MEDIO / THINK_TANK / PAC / SUPER_PAC / ORGANISMO_INTERNACIONAL / RELIGIOSA / ARMADA |
| `founded_date` | `date` | |
| `objectives` | `text` | Objetivos declarados |
| `logo_image_id` | `uuid` | → `images.id` |
| `review_status` | `enum` | |

### 2.3 Tabla `locations` (LOC)
| Campo | Tipo | Notas |
|---|---|---|
| `id` | `uuid` | PK |
| `prefixed_id` | `text UNIQUE` | `LOC-…` |
| `name` | `text` | |
| `loc_type` | `enum` | PAÍS / CIUDAD / REGIÓN / EDIFICIO / COORDENADA / OTRO |
| `lat` / `lon` | `double` | **Nunca presentar como verificadas sin evidencia** |
| `coords_verified` | `boolean` | |
| `country` | `text` | |

### 2.4 Tabla `conflicts` (CNF)
| Campo | Tipo |
|---|---|
| `id`, `prefixed_id` | `uuid`, `text UNIQUE` |
| `name` | `text` |
| `period_start` / `period_end` | `date` (end puede ser NULL = en curso) |
| `background` | `text` (antecedentes) |
| `description` | `text` |

### 2.5 Tabla `events` (EVT)
| Campo | Tipo | Notas |
|---|---|---|
| `id`, `prefixed_id` | `uuid`, `text UNIQUE` | `EVT-…` |
| `title` | `text` | |
| `date_start` / `date_end` | `timestamptz` | Puede ser parcial |
| `location_id` | `uuid` | → `locations` |
| `conflict_id` | `uuid` | → `conflicts` |
| `description` | `text` | |
| `victims_reported` | `jsonb` | Múltiples estimaciones + fuente de cada una |
| `damage_reported` | `text` | |
| `certainty` | `enum` | DOCUMENTADO / CORROBORADO / PROBABLE / POSIBLE / NO VERIFICADO / DISPUTADO / REFUTADO / FALSO / INDETERMINADO |

### 2.6 Tabla `videos` (VID) — Ficha maestra de video
| Campo | Tipo | Notas |
|---|---|---|
| `id`, `prefixed_id` | `uuid`, `text UNIQUE` | `VID-…` |
| `title` | `text` | Título descriptivo |
| `master_file` | `text` | Ruta al archivo maestro (**nunca se modifica**) |
| `original_url` | `text` | |
| `platform` | `text` | X / YouTube / Telegram / TikTok / otro |
| `channel` | `text` | Usuario/canal original |
| `published_at` | `timestamptz` | Fecha publicación |
| `recorded_at` | `timestamptz` | Fecha estimada de grabación |
| `recorded_at_verified` | `boolean` | |
| `duration` | `interval` | |
| `language` | `text` | |
| `sha256` | `text` | Hash del master |
| `file_size` | `bigint` | Bytes |
| `codec` / `resolution` / `fps` / `bitrate` | `text` | ffprobe |
| `acquired_at` | `timestamptz` | Fecha de adquisición |
| `acquisition_source` | `text` | |
| `manipulation_class` | `enum` | A–F, U (ver §10 del Prompt) |
| `description` | `text` | Descripción OBJETIVA |

**Tabla auxiliar `media_versions`** (cadena de custodia):
`id`, `video_id`, `version_type` (ORIGINAL / ANALYSIS_COPY / WEB_PROXY / THUMBNAIL / FRAME / AUDIO / TRANSCRIPT), `file_path`, `sha256`, `created_at`.

### 2.7 Tabla `images` (IMG)
`id`, `prefixed_id`, `title`, `file_path`, `sha256`, `source`, `author`, `date_taken`, `license`, `description`, `context`, `video_id` (nullable → si proviene de un video, es un fotograma).

### 2.8 Tabla `audio` (AUD)
`id`, `prefixed_id`, `file_path`, `sha256`, `duration`, `source`, `transcript_id`.

### 2.9 Tabla `documents` (DOC)
`id`, `prefixed_id`, `title`, `doc_type` (CONTRATO / INFORME / COMUNICADO / LEGISLACIÓN / FARA / CORREO / OTRO), `file_path`, `sha256`, `source_id`, `published_at`, `language`.

### 2.10 Tabla `sources` (SRC)
| Campo | Tipo |
|---|---|
| `id`, `prefixed_id` | `uuid`, `text UNIQUE` |
| `name` | `text` |
| `organization` | `text` |
| `author` | `text` |
| `url` | `text` |
| `published_at` | `timestamptz` |
| `accessed_at` | `timestamptz` (fecha de consulta) |
| `language` | `text` |
| `source_type` | `enum` | PRIMARIA / SECUNDARIA / TERCIARIA / TESTIMONIO / DOCUMENTO_OFICIAL / PERIODISMO / ACADÉMICA / RED_SOCIAL / AUDIOVISUAL |
| `preserved_file` | `text` | Archivo preservado |
| `is_official` | `boolean` | (NO significa "verdadero"; significa "lo afirmó la institución") |

### 2.11 Tabla `claims` (CLM) — Afirmaciones
| Campo | Tipo |
|---|---|
| `id`, `prefixed_id` | `uuid`, `text UNIQUE` |
| `author_id` | `uuid` → `persons` (nullable) |
| `claim_text` | `text` | Texto exacto o paráfrasis fiel |
| `claim_date` | `timestamptz` | |
| `source_video_id` | `uuid` → `videos` (nullable) |
| `subject_id` | `uuid` | Objeto de la afirmación (opcional) |
| `evidence_for` | `text` | Evidencia favorable |
| `evidence_against` | `text` | Evidencia contradictoria |
| `status` | `enum` | CONFIRMADA / CORROBORADA / PARCIALMENTE_CORROBORADA / NO_DEMOSTRADA / DISPUTADA / REFUTADA / FALSA / INDETERMINADA |
| `confidence` | `smallint` | 0–100 |
| `last_reviewed_at` | `timestamptz` | |

### 2.12 Tabla `relationships` (REL) — **EL CORAZÓN DEL MODELO**
Patrón sujeto–predicado–objeto. Conecta CUALQUIER entidad con CUALQUIER otra.

| Campo | Tipo | Notas |
|---|---|---|
| `id`, `prefixed_id` | `uuid`, `text UNIQUE` | `REL-…` |
| `subject_id` | `uuid` | Entidad origen (polimórfica) |
| `subject_type` | `text` | PER / ORG / GOV / VID / CLM / EVT / DOC / SRC / LOC / CNF / ART / IMG / AUD |
| `predicate` | `text` | `served_as`, `met_with`, `received_contract_from`, `donated_to`, `member_of`, `published`, `appears_in`, `related_to`… |
| `object_id` | `uuid` | Entidad destino |
| `object_type` | `text` | |
| `rel_type` | `enum` | INSTITUCIONAL / FINANCIERA / LOBBYING / CONTRATO / DONACIÓN / MEMBRESÍA / REUNIÓN / DECLARACIÓN / ALIANZA / LABORAL / FAMILIAR / HIPOTÉTICA / DISPUTADA / SECUENCIA / CITADO_POR |
| `start_date` / `end_date` | `date` | |
| `source_id` | `uuid` | → `sources` (**obligatoria**) |
| `evidence_id` | `uuid` | → evidencia que sustenta |
| `confidence` | `enum` | CONFIRMADA / PROBABLE / NO_VERIFICADA |
| `status` | `enum` | ACTIVA / DISPUTADA / REFUTADA / ELIMINADA |
| `notes` | `text` | |

**Regla de oro (§38 y §41):** una `relationship` **no puede existir sin `source_id`**. Si no hay
fuente, la relación no se crea → se coloca en el "panel de relaciones sin fuente" del investigador.

### 2.13 Tabla `citations` (CIT)
Enlaza una afirmación/fragmento a su fuente exacta (página / minuto–segundo).
`id`, `claim_id`, `source_id`, `video_id`, `timestamp_start` / `timestamp_end`, `page`, `url`, `accessed_at`.

### 2.14 Tabla `transcripts` y `translations`
`transcripts`: `id`, `video_id`, `language`, `text`, `is_literal`, `created_by`.
`translations`: `id`, `transcript_id`, `target_language`, `text`, `created_by`.

### 2.15 Tabla `investigations` (ART) — Dossiers
`id`, `prefixed_id` (`ART-…`), `title`, `summary`, `author_id`, `status`, `created_at`.

### 2.16 Tablas `change_history` y `verification_reviews`
**`change_history`:** `id`, `entity_type`, `entity_id`, `field_changed`, `old_value`, `new_value`, `changed_by`, `changed_at`, `reason`. *(Nunca se elimina la evaluación anterior.)*
**`verification_reviews`:** `id`, `entity_type`, `entity_id`, `review_status`, `reviewer_id`, `reviewed_at`, `notes`.

### 2.17 Tabla `users`
`id`, `username`, `role` (INVESTIGADOR / ADMIN / VISOR), `password_hash`, `created_at`.

---

## 3. Cómo se conectan las entidades (los caminos del Prompt, §40)

### Camino A — Desde un VIDEO
```
VID-000123
  └─ appears_in(PER) ── personas que aparecen
  └─ made_claim(CLM) ── afirmaciones hechas en él
  └─ mentions(ORG) ── organizaciones mencionadas
  └─ documents(EVT) ── evento que documenta
  └─ sourced_from(SRC) ── la fuente (URL/canal)
  └─ produces(IMG) ── fotogramas/thumbnails
```

### Camino B — Desde una FECHA / EVENTO
```
EVT-000456
  └─ involves(CNF) ── conflicto
  └─ located_at(LOC) ── lugar
  └─ documented_by(VID) ── videos
  └─ relates_to(PER) ── participantes
  └─ subject_of(CLM) ── afirmaciones
  └─ evidenced_by(DOC/SRC) ── fuentes
```

### Camino C — Desde una PERSONA
```
PER-000789
  └─ served_as(ORG) ── cargos
  └─ member_of(ORG) ── membresías
  └─ met_with(PER/ORG) ── reuniones
  └─ received_from(ORG/GOV) ── contratos/donaciones
  └─ made(CLM) ── afirmaciones
  └─ appears_in(VID) ── videos
```

---

## 4. Convenciones transversales

1. **Campo `review_status`** en cada ficha: GENERADO_AUTOMÁTICAMENTE / PENDIENTE_DE_REVISIÓN /
   REVISADO / VERIFICADO / DISPUTADO / ARCHIVADO.
2. **ETIQUETAS DE CERTEZA** (vocabulario único y preciso): DOCUMENTADO, CORROBORADO, PROBABLE,
   POSIBLE, NO_VERIFICADO, DISPUTADO, REFUTADO, FALSO, INDETERMINADO. *Nunca "comprobado" con una sola fuente.*
3. **Separación estricta** de estas categorías (en campos separados, jamás mezcladas):
   HECHO_DOCUMENTADO / AFIRMACIÓN / INTERPRETACIÓN / HIPÓTESIS / OPINIÓN / NO_VERIFICADO / REFUTADO.
4. **Anti-bias de confirmación (§28):** toda hipótesis debe enlazar EVIDENCIA FAVORABLE,
   CONTRADICTORIA, NEUTRAL, preguntas sin responder y fuentes faltantes.
5. **Manipulación (clases A–F, U)** registrada por video (nunca solo "IA / no IA").
6. **Proveniencia (§39):** todo dato sin fuente rastreable → `FUENTE DESCONOCIDA`. La IA
   **propone, nunca rellena huecos inventando.**

---

## 5. Roadmap de desarrollo (fases del Prompt, §42)

| Fase | Contenido | Estado |
|---|---|---|
| **FASE 1** | Esquema de datos + nomenclatura (este documento) | ✅ PROPUESTA |
| FASE 2 | Personas + Organizaciones + Videos + Fuentes + Eventos + Claims | ⬜ |
| FASE 3 | Interfaz enciclopédica con hipervínculos internos | ⬜ |
| FASE 4 | Timeline | ⬜ |
| FASE 5 | Organigramas | ⬜ |
| FASE 6 | Grafo de relaciones | ⬜ |
| FASE 7 | Mapa mundial | ⬜ |
| FASE 8 | Análisis audiovisual | ⬜ |
| FASE 9 | Ingestión automática con IA | ⬜ |
| FASE 10 | Herramientas OSINT avanzadas | ⬜ |

---

## 6. Decisiones pendientes de aprobación de Christo

1. **Alcance de la FASE 2:** ¿empezamos construyendo el esquema SQL ejecutable, o primero
   migramos los 135 videos + 46 clips ya existentes a este modelo?
2. **Dónde vive el master:** ¿PostgreSQL local o en la nube (respetando tu preferencia cloud-first)?
3. **Neo4j ahora o después:** ¿introducimos el grafo desde el inicio o lo diferimos a FASE 6?
4. **Nomenclatura de las carpetas OSINT existentes:** ¿migramos `expediente_sombras_israel_2026-08-29`
   y `...continuacion` a esta estructura, o creamos alias/puente?

---

*Documento de propuesta FASE 1 — generado por Atenea (perfil academia). Pendiente de aprobación por Christo antes de iniciar la FASE 2.*
