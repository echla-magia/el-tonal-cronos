-- ============================================================================
-- ARCHIVO DOCUMENTAL DE CONFLICTOS, PODER Y EVIDENCIA AUDIOVISUAL
-- FASE 1 — Esquema PostgreSQL (esquema ejecutable)
-- Versión: v01 · Fecha: 2026-09-03
-- Principio rector: no almacenar conclusiones; almacenar evidencia, relaciones,
-- fuentes y grados de certeza.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ----------------------------------------------------------------------------
-- ENUMS (vocabulario único y preciso)
-- ----------------------------------------------------------------------------
CREATE TYPE review_status AS ENUM
  ('GENERADO_AUTOMATICAMENTE','PENDIENTE_DE_REVISION','REVISADO','VERIFICADO','DISPUTADO','ARCHIVADO');

CREATE TYPE certainty_label AS ENUM
  ('DOCUMENTADO','CORROBORADO','PROBABLE','POSIBLE','NO_VERIFICADO','DISPUTADO','REFUTADO','FALSO','INDETERMINADO');

CREATE TYPE org_type AS ENUM
  ('GOBIERNO','MINISTERIO','EJERCITO','PARTIDO','ONG','EMPRESA','CORPORACION','MEDIO','THINK_TANK','PAC','SUPER_PAC','ORGANISMO_INTERNACIONAL','RELIGIOSA','ARMADA');

CREATE TYPE source_type AS ENUM
  ('PRIMARIA','SECUNDARIA','TERCIARIA','TESTIMONIO','DOCUMENTO_OFICIAL','PERIODISMO','ACADEMICA','RED_SOCIAL','AUDIOVISUAL');

CREATE TYPE claim_status AS ENUM
  ('CONFIRMADA','CORROBORADA','PARCIALMENTE_CORROBORADA','NO_DEMOSTRADA','DISPUTADA','REFUTADA','FALSA','INDETERMINADA');

CREATE TYPE rel_type AS ENUM
  ('INSTITUCIONAL','FINANCIERA','LOBBYING','CONTRATO','DONACION','MEMBRESIA','REUNION','DECLARACION','ALIANZA','LABORAL','FAMILIAR','HIPOTETICA','DISPUTADA','SECUENCIA','CITADO_POR');

CREATE TYPE rel_confidence AS ENUM
  ('CONFIRMADA','PROBABLE','NO_VERIFICADA');

CREATE TYPE rel_status AS ENUM
  ('ACTIVA','DISPUTADA','REFUTADA','ELIMINADA');

CREATE TYPE manipulation_class AS ENUM
  ('A','B','C','D','E','F','U');
-- A Original / B Edición convencional / C Altera contexto / D Manipulación
-- E Sintética probable / F Sintética confirmada / U Indeterminado

CREATE TYPE information_category AS ENUM
  ('HECHO_DOCUMENTADO','AFIRMACION','INTERPRETACION','HIPOTESIS','OPINION','NO_VERIFICADO','REFUTADO');

CREATE TYPE entity_type AS ENUM
  ('PER','ORG','GOV','VID','IMG','AUD','CLM','SRC','DOC','LOC','REL','CNF','ART');

CREATE TYPE media_version_type AS ENUM
  ('ORIGINAL','ANALYSIS_COPY','WEB_PROXY','THUMBNAIL','FRAME','AUDIO','TRANSCRIPT');

-- ----------------------------------------------------------------------------
-- TABLAS BASE
-- ----------------------------------------------------------------------------

CREATE TABLE persons (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  full_name       text NOT NULL,
  original_name   text,
  aliases         jsonb,
  birth_date      date,
  nationality     text,
  profession      text,
  current_title   text,
  bio_summary     text,
  main_image_id   uuid,
  category        information_category DEFAULT 'HECHO_DOCUMENTADO',
  review_status   review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

CREATE TABLE organizations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  name            text NOT NULL,
  original_name   text,
  country         text,
  org_type        org_type,
  entity_kind     entity_type DEFAULT 'ORG', -- 'GOV' si es gobierno/estado
  founded_date    date,
  objectives      text,
  logo_image_id   uuid,
  review_status   review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

CREATE TABLE locations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  name            text NOT NULL,
  loc_type        text, -- PAIS/CIUDAD/REGION/EDIFICIO/COORDENADA/OTRO
  lat             double precision,
  lon             double precision,
  coords_verified boolean DEFAULT false,
  country         text,
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE conflicts (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  name            text NOT NULL,
  period_start    date,
  period_end      date, -- NULL = en curso
  background      text,
  description     text,
  review_status   review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE events (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  title           text NOT NULL,
  date_start      timestamptz,
  date_end        timestamptz,
  location_id     uuid REFERENCES locations(id),
  conflict_id     uuid REFERENCES conflicts(id),
  description     text,
  victims_reported jsonb, -- múltiples estimaciones + fuente de cada una
  damage_reported text,
  certainty       certainty_label DEFAULT 'INDETERMINADO',
  review_status   review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE videos (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id         text UNIQUE NOT NULL,
  title               text NOT NULL,
  master_file         text NOT NULL, -- NUNCA se modifica
  original_url        text,
  platform            text,
  channel             text,
  published_at        timestamptz,
  recorded_at         timestamptz,
  recorded_at_verified boolean DEFAULT false,
  duration            interval,
  language            text,
  sha256              text,
  file_size           bigint,
  codec               text,
  resolution          text,
  fps                 double precision,
  bitrate             bigint,
  acquired_at         timestamptz,
  acquisition_source  text,
  manipulation_class  manipulation_class DEFAULT 'U',
  description         text,
  category            information_category DEFAULT 'HECHO_DOCUMENTADO',
  review_status       review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at          timestamptz DEFAULT now()
);

CREATE TABLE images (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  title           text,
  file_path       text NOT NULL,
  sha256          text,
  source          text,
  author          text,
  date_taken      timestamptz,
  license         text,
  description     text,
  context         text,
  video_id        uuid REFERENCES videos(id), -- si es fotograma
  review_status   review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE audio (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  file_path       text NOT NULL,
  sha256          text,
  duration        interval,
  source          text,
  language        text,
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE documents (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  title           text NOT NULL,
  doc_type        text, -- CONTRATO/INFORME/COMUNICADO/LEGISLACION/FARA/CORREO/OTRO
  file_path       text,
  sha256          text,
  source_id       uuid,
  published_at    timestamptz,
  language        text,
  review_status   review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE sources (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  name            text NOT NULL,
  organization    text,
  author          text,
  url             text,
  published_at    timestamptz,
  accessed_at     timestamptz,
  language        text,
  source_type     source_type,
  preserved_file  text,
  is_official     boolean DEFAULT false, -- NO significa "verdadero"
  review_status   review_status DEFAULT 'GENERADO_AUTOMATICAMENTE',
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE claims (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  author_id       uuid REFERENCES persons(id),
  claim_text      text NOT NULL,
  claim_date      timestamptz,
  source_video_id uuid REFERENCES videos(id),
  subject_id      uuid,
  evidence_for    text,
  evidence_against text,
  status          claim_status DEFAULT 'INDETERMINADA'::claim_status,
  confidence      smallint CHECK (confidence BETWEEN 0 AND 100),
  last_reviewed_at timestamptz,
  category        information_category DEFAULT 'AFIRMACION',
  created_at      timestamptz DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- RELATIONSHIPS — EL CORAZÓN DEL MODELO (sujeto-predicado-objeto polimórfico)
-- ----------------------------------------------------------------------------
CREATE TABLE relationships (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL,
  subject_id      uuid NOT NULL,
  subject_type    entity_type NOT NULL,
  predicate       text NOT NULL,
  object_id       uuid NOT NULL,
  object_type     entity_type NOT NULL,
  rel_type        rel_type NOT NULL,
  start_date      date,
  end_date        date,
  source_id       uuid REFERENCES sources(id) NOT NULL, -- OBLIGATORIA
  evidence_id     uuid,
  confidence      rel_confidence DEFAULT 'NO_VERIFICADA',
  status          rel_status DEFAULT 'ACTIVA',
  notes           text,
  created_at      timestamptz DEFAULT now(),
  CONSTRAINT chk_no_self CHECK (subject_id <> object_id OR subject_type <> object_type)
);
-- Una relación NO puede existir sin source_id (fuente). Regla de oro §38.

CREATE TABLE citations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  claim_id        uuid REFERENCES claims(id),
  source_id       uuid REFERENCES sources(id),
  video_id        uuid REFERENCES videos(id),
  timestamp_start interval,
  timestamp_end   interval,
  page            text,
  url             text,
  accessed_at     timestamptz,
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE transcripts (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id        uuid REFERENCES videos(id) NOT NULL,
  language        text,
  text            text NOT NULL,
  is_literal      boolean DEFAULT true,
  created_by      text,
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE translations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transcript_id   uuid REFERENCES transcripts(id) NOT NULL,
  target_language text,
  text            text NOT NULL,
  created_by      text,
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE media_versions (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id        uuid REFERENCES videos(id) NOT NULL,
  version_type    media_version_type NOT NULL,
  file_path       text NOT NULL,
  sha256          text,
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE investigations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prefixed_id     text UNIQUE NOT NULL, -- ART-…
  title           text NOT NULL,
  summary         text,
  author_id       uuid REFERENCES persons(id),
  status          review_status DEFAULT 'PENDIENTE_DE_REVISION',
  created_at      timestamptz DEFAULT now()
);

CREATE TABLE users (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username        text UNIQUE NOT NULL,
  role            text DEFAULT 'INVESTIGADOR', -- INVESTIGADOR/ADMIN/VISOR
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- AUDITORÍA — HISTORIAL DE CAMBIOS (nunca se borra una evaluación previa)
-- ----------------------------------------------------------------------------
CREATE TABLE change_history (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type     entity_type,
  entity_id       uuid,
  field_changed   text,
  old_value       text,
  new_value       text,
  changed_by      text,
  changed_at      timestamptz DEFAULT now(),
  reason          text
);

CREATE TABLE verification_reviews (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type     entity_type,
  entity_id       uuid NOT NULL,
  review_status   review_status DEFAULT 'PENDIENTE_DE_REVISION',
  reviewer_id     uuid REFERENCES users(id),
  reviewed_at     timestamptz,
  notes           text
);

-- ----------------------------------------------------------------------------
-- ÍNDICES clave
-- ----------------------------------------------------------------------------
CREATE INDEX idx_relationships_subject ON relationships(subject_id, subject_type);
CREATE INDEX idx_relationships_object  ON relationships(object_id, object_type);
CREATE INDEX idx_relationships_predicate ON relationships(predicate);
CREATE INDEX idx_relationships_source ON relationships(source_id);
CREATE INDEX idx_events_date ON events(date_start);
CREATE INDEX idx_videos_published ON videos(published_at);
CREATE INDEX idx_claims_status ON claims(status);

-- ============================================================================
-- FIN DE ESQUEMA v01 — FASE 1
-- ============================================================================