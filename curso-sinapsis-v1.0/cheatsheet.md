# Sinapsis — Guia Rapida (Cheatsheet)

## Las 4 Fases del Pipeline

| Fase | Que hace | Icono |
|------|----------|-------|
| Observacion | Sinapsis observa lo que haces en cada sesion | Ojo |
| Deteccion | Identifica patrones que se repiten | Lupa |
| Instincts | Cristaliza patrones como reglas atomicas YAML | Rayo |
| Evolucion | Agrupa instincts en skills, commands o agents | Cohete |

## Los 6 Comandos Principales

| Comando | Que hace |
|---------|----------|
| `/instinct-status` | Muestra todos los instincts aprendidos con confidence |
| `/projects` | Lista proyectos conocidos con conteo de instincts |
| `/promote` | Promueve un instinct de proyecto a global |
| `/evolve` | Fusiona instincts relacionados en skill/command/agent |
| `/gotcha` | Captura un par error-fix como instinct de alta prioridad |
| `/instinct-export` | Exporta instincts a fichero para backup o compartir |

## Modelo de Confidence

```
+0.05  → Patron re-observado (lo repites)
+0.10  → Usuario confirma (dices "si, correcto")
-0.10  → Usuario contradice (dices "no, cambialo")
-0.02  → Decay semanal (si no se usa, baja)
< 0.20 → Archivado automaticamente (poder olvidado)
```

## Los 3 Tipos de Evolucion

| Tipo | Que es | Cuando se crea | Ejemplo |
|------|--------|----------------|---------|
| Skill | Fichero con reglas de un dominio | Automatico: 5+ instincts relacionados | content-rules, web-stack |
| Command | Slash command para un workflow | Manual: tu lo defines | /generar-propuesta |
| Agent | Proceso autonomo multi-paso | Manual: combina skills + commands | formador-completo |

## Donde Vive Todo

```
~/.claude/
  homunculus/
    instincts/
      personal/         → Instincts globales (scope: global)
      projects/
        mi-proyecto/    → Instincts de proyecto (scope: project)
    observations/       → Observaciones de sesiones
    identity.json       → Tu identidad (nombre, rol, preferencias)
  skills/
    mi-skill/
      SKILL.md          → Definicion de la skill
      commands/         → Tus commands personalizados
      agents/           → Tus agents autonomos
```

## Reglas de Oro

1. **Sinapsis aprende observandote** — No necesitas ensenharle nada manualmente. Solo trabaja.
2. **La confidence lo regula todo** — Los instincts buenos suben, los malos bajan y desaparecen.
3. **Promueve con criterio** — Solo promueve a global lo que aplica en TODOS tus proyectos.
4. **Exporta siempre** — Un backup de tus instincts vale oro. Hazlo antes de cambios grandes.
5. **Comparte tus poderes** — Los instincts compartidos hacen crecer a toda la comunidad.
