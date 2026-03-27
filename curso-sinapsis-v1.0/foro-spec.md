# Especificacion del Foro — Sinapsis Community

## Categorias

| Categoria | Descripcion | Tipo de contenido |
|-----------|-------------|-------------------|
| Mis Primeros Instincts | Para compartir tus primeros instincts y pedir feedback | Instincts YAML, preguntas |
| Skills Compartidas | Skills evolucionadas listas para importar | Skills completas, SKILL.md |
| Gotchas y Soluciones | Pares error-fix que ayudan a toda la comunidad | Gotchas YAML, capturas |
| Forks de Sinapsis | Versiones de Sinapsis adaptadas a dominios especificos | Repos, configs, identity.json |
| Prompts e Infografias | Prompts para Nano Banana/Midjourney + resultados visuales | Prompts, imagenes generadas |
| Mejoras y Sugerencias | Ideas para mejorar Sinapsis, bugs, feature requests | Texto libre, issues |

## Estructura de un Post

```yaml
titulo: "Mis instincts para desarrollo web con Next.js"
autor: "usuario123"
categoria: "Skills Compartidas"
tags: ["web-development", "nextjs", "tailwind"]
descripcion: "5 instincts que aprendi despues de 2 semanas usando Sinapsis para desarrollo web..."
adjuntos:
  - tipo: "yaml"
    nombre: "web-instincts.yaml"
    contenido: "..."
  - tipo: "imagen"
    nombre: "instinct-status-screenshot.png"
fecha: "2026-03-25"
upvotes: 0
```

## Sistema de Upvotes

- Cada usuario puede dar 1 upvote por post
- Los instincts con 50+ upvotes se marcan como "Candidato a Oficial"
- Los instincts con 100+ upvotes y validacion del equipo se convierten en "Instinct Oficial"
- Los Instincts Oficiales se incluyen en el paquete base de Sinapsis para nuevos usuarios

## Pipeline de Instinct Oficial

```
Compartido (0 upvotes)
  → Popular (10+ upvotes)
    → Candidato (50+ upvotes)
      → Revisado (equipo lo valida)
        → Oficial (incluido en Sinapsis base)
```

## Sistema de Tags

### Tags por dominio
web-development, mobile, backend, frontend, devops, data-science, content-creation, design, legal, educacion, finanzas, marketing

### Tags por tipo
instinct, skill, command, agent, gotcha, fork, prompt, infografia

### Tags por nivel
principiante, intermedio, avanzado

## Reglas del Foro

1. Todo post debe incluir al menos 1 fichero YAML o descripcion detallada
2. Los instincts compartidos deben tener confidence >= 0.70 (probados y fiables)
3. Los gotchas deben incluir tanto el error como la solucion
4. Los forks deben documentar que dominio cubren y que instincts base incluyen
5. Prohibido compartir instincts con informacion sensible (API keys, passwords, datos personales)
6. Se anima a dar feedback constructivo en los comentarios

## Modelo de Datos

### Tabla: forum_posts
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id | auto | ID unico del post |
| titulo | text | Titulo del post |
| autor_id | relation | Referencia al usuario |
| categoria | enum | Una de las 6 categorias |
| descripcion | text | Descripcion del post |
| tags | list | Lista de tags |
| upvotes | number | Contador de upvotes |
| estado | enum | normal, candidato, oficial |
| fecha_creacion | date | Fecha de publicacion |

### Tabla: forum_attachments
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id | auto | ID unico |
| post_id | relation | Referencia al post |
| tipo | enum | yaml, imagen, markdown |
| nombre | text | Nombre del fichero |
| contenido | text | Contenido del fichero |

### Tabla: forum_upvotes
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id | auto | ID unico |
| post_id | relation | Referencia al post |
| usuario_id | relation | Referencia al usuario |
| fecha | date | Fecha del upvote |
