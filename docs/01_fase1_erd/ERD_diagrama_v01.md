# ERD — ARCHIVO DOCUMENTAL (v01)

```mermaid
erDiagram
    PERSONS ||--o{ CLAIMS : "author"
    PERSONS ||--o{ RELATIONSHIPS : "subject/object"
    PERSONS ||--o{ IMAGES : "main_image"
    
    ORGANIZATIONS ||--o{ RELATIONSHIPS : "subject/object"
    ORGANIZATIONS ||--o{ IMAGES : "logo"
    
    VIDEOS ||--o{ TRANSCRIPTS : "has"
    VIDEOS ||--o{ MEDIA_VERSIONS : "preserved_as"
    VIDEOS ||--o{ IMAGES : "produces_frame"
    VIDEOS ||--o{ CLAIMS : "source_video"
    VIDEOS ||--o{ CITATIONS : "cited_in"
    VIDEOS ||--o{ RELATIONSHIPS : "subject/object"
    
    EVENTS ||--o{ VIDEOS : "documented_by"
    EVENTS }o--|| LOCATIONS : "located_at"
    EVENTS }o--|| CONFLICTS : "part_of"
    EVENTS ||--o{ RELATIONSHIPS : "subject/object"
    
    CONFLICTS ||--o{ EVENTS : "contains"
    
    SOURCES ||--o{ RELATIONSHIPS : "proves" 
    SOURCES ||--o{ CITATIONS : "referenced_in"
    SOURCES ||--o{ DOCUMENTS : "is_source_of"
    
    CLAIMS ||--o{ CITATIONS : "has_citation"
    CLAIMS ||--o{ RELATIONSHIPS : "subject/object"
    
    DOCUMENTS ||--o{ RELATIONSHIPS : "subject/object"
    
    LOCATIONS ||--o{ EVENTS : "hosts"
    LOCATIONS ||--o{ RELATIONSHIPS : "subject/object"
    
    TRANSCRIPTS ||--o{ TRANSLATIONS : "translated_to"
    
    RELATIONSHIPS }o--|| SOURCES : "requires_source"
    RELATIONSHIPS }o--|| PERSONS : "subject/object"
    RELATIONSHIPS }o--|| ORGANIZATIONS : "subject/object"
```

## Núcleo conceptual

> **RELATIONSHIPS es la tabla maestra.** Cualquier entidad (PER, ORG, GOV, VID, IMG, AUD, CLM,
> SRC, DOC, LOC, REL, CNF, ART) puede aparecer como *sujeto* o como *objeto* de una relación,
> mediante el patrón polimórfico `(subject_id, subject_type) → predicate → (object_id, object_type)`.
> Toda relación DEBE llevar `source_id`. Sin fuente, no existe relación.

## Regla de oro

`No almacenar conclusiones: almacenar evidencia, relaciones, fuentes y grados de certeza.`

## Caminos de navegación (Prompt §40)

```
VIDEO → PERSONA → ORGANIZACIÓN → GOBIERNO → EMPRESA → CONTRATO → DOCUMENTO
      → EVENTO → AFIRMACIÓN → FUENTE → OTROS VIDEOS
FECHA → EVENTOS → VIDEOS → DECLARACIONES → PERSONAS → DOCUMENTOS
      → VERSIONES CONTRADICTORIAS
```