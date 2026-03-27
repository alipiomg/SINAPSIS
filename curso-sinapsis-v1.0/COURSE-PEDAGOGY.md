# Decisiones Pedagogicas — Sinapsis: De Cero a Maestro

## Principios de diseno

1. **Nivel cero absoluto**: No se asume conocimiento previo de YAML, hooks, CLI ni Sinapsis. Todo se explica desde cero.
2. **Metaforas cotidianas con tema superheroes**: Cada concepto se ancla a una metafora de superheroes conocida (Marvel, DC, Dragon Ball) para que sea memorable.
3. **Practica antes que teoria**: A partir del nodo 4, cada leccion incluye comandos reales que el alumno puede ejecutar.
4. **Ejemplos reales, nunca pseudo**: Todo ejemplo de codigo viene del manual oficial o del repo de Sinapsis.
5. **Retos ejecutables**: Los retos de zona 1-2 pueden hacerse sin instalacion (en papel). Los de zona 3-4 requieren Claude Code + Sinapsis.

## Estructura de 6 secciones por leccion

Cada leccion (concept JSON) tiene exactamente 6 secciones:

| Seccion | Proposito |
|---------|-----------|
| explicacion | Contenido principal, 3-5 parrafos, progresivo |
| metafora | Ancla memorable con tema superheroes |
| ejemplo | Codigo o comando real del manual/repo |
| mini_reto | Ejercicio practico adaptado al nivel |
| glosario | Solo terminos nuevos de esta leccion |
| resumen_visual | Descripcion para infografia (Nano Banana) |

## Progresion por zonas

| Zona | Nivel | Enfoque | Retos |
|------|-------|---------|-------|
| Plaza de la Sinapsis | Conceptual | Entender que es y como funciona | En papel |
| Laboratorio Sinaptico | Practico guiado | Ejecutar comandos con guia | En Claude Code |
| Taller de Casos de Uso | Practico real | Aplicar a problemas del alumno | Proyecto propio |
| Foro y Comunidad | Social + reto | Compartir y reflexionar | Reto 7 dias |

## Gamificacion

- XP por leccion: 25-60 segun dificultad
- 5 niveles con nombres de superheroes (Civil a Vengador)
- 8 badges que premian hitos especificos
- Bonus XP por completar retos sin pistas (x1.5)

## Integracion con Sinapsis

El curso se mejora a si mismo mediante observables:
- Detecta lecciones donde los alumnos abandonan
- Detecta retos demasiado dificiles o faciles
- Genera instincts pedagogicos automaticos
- El curso v2 incorpora estas mejoras

Este ciclo (curso genera datos → datos generan instincts → instincts mejoran curso) es la esencia de Sinapsis aplicada a la educacion.
