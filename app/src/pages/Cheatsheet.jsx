import { Link } from 'react-router-dom'

export default function Cheatsheet() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/mapa" className="text-white/40 text-sm no-underline hover:text-copper transition-colors">
        ← Volver al mapa
      </Link>

      <h1 className="font-display text-4xl text-white mt-6 mb-2">Guia Rapida</h1>
      <p className="text-white/40 mb-10">Todo Sinapsis en una pagina</p>

      {/* 4 Fases */}
      <section className="mb-10">
        <h2 className="text-xl text-copper font-semibold mb-4">Las 4 Fases del Pipeline</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { fase: 'Observacion', desc: 'Sinapsis observa tus sesiones', icon: '👁' },
            { fase: 'Deteccion', desc: 'Identifica patrones recurrentes', icon: '🔍' },
            { fase: 'Instincts', desc: 'Cristaliza reglas atomicas YAML', icon: '⚡' },
            { fase: 'Evolucion', desc: 'Genera skills, commands, agents', icon: '🚀' },
          ].map((f, i) => (
            <div key={i} className="bg-surface-2 border border-copper/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-copper text-sm font-semibold">{f.fase}</div>
              <div className="text-white/40 text-xs mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comandos */}
      <section className="mb-10">
        <h2 className="text-xl text-copper font-semibold mb-4">Los 6 Comandos Principales</h2>
        <div className="space-y-2">
          {[
            { cmd: '/instinct-status', desc: 'Muestra todos los instincts aprendidos con confidence' },
            { cmd: '/projects', desc: 'Lista proyectos conocidos con conteo de instincts' },
            { cmd: '/promote', desc: 'Promueve un instinct de proyecto a global' },
            { cmd: '/evolve', desc: 'Fusiona instincts relacionados en skill/command/agent' },
            { cmd: '/gotcha', desc: 'Captura un par error→fix como instinct de alta prioridad' },
            { cmd: '/instinct-export', desc: 'Exporta instincts a fichero para backup o compartir' },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-4 bg-surface rounded-lg border border-white/5 px-4 py-3">
              <code className="text-copper text-sm font-semibold whitespace-nowrap">{c.cmd}</code>
              <span className="text-white/50 text-sm">{c.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Confidence */}
      <section className="mb-10">
        <h2 className="text-xl text-copper font-semibold mb-4">Modelo de Confidence</h2>
        <div className="bg-surface rounded-xl border border-copper/10 p-6 font-mono text-sm space-y-2">
          <div className="flex justify-between"><span className="text-emerald-400">+0.05</span><span className="text-white/50">Patron re-observado (lo repites)</span></div>
          <div className="flex justify-between"><span className="text-emerald-400">+0.10</span><span className="text-white/50">Usuario confirma (&quot;si, correcto&quot;)</span></div>
          <div className="flex justify-between"><span className="text-red-400">-0.10</span><span className="text-white/50">Usuario contradice (&quot;no, cambialo&quot;)</span></div>
          <div className="flex justify-between"><span className="text-amber-400">-0.02</span><span className="text-white/50">Decay semanal (si no se usa, baja)</span></div>
          <div className="flex justify-between"><span className="text-red-400">&lt;0.20</span><span className="text-white/50">Archivado automaticamente</span></div>
        </div>
      </section>

      {/* Tipos de evolucion */}
      <section className="mb-10">
        <h2 className="text-xl text-copper font-semibold mb-4">Los 3 Tipos de Evolucion</h2>
        <div className="space-y-3">
          {[
            { tipo: 'Skill', desc: 'Fichero con reglas de un dominio', when: 'Automatico: 5+ instincts relacionados', example: 'content-rules, web-stack' },
            { tipo: 'Command', desc: 'Slash command para un workflow', when: 'Manual: tu lo defines', example: '/generar-propuesta' },
            { tipo: 'Agent', desc: 'Proceso autonomo multi-paso', when: 'Manual: combina skills + commands', example: 'formador-completo' },
          ].map((t, i) => (
            <div key={i} className="bg-surface-2 border border-copper/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-copper font-semibold">{t.tipo}</span>
                <span className="text-white/20">—</span>
                <span className="text-white/50 text-sm">{t.desc}</span>
              </div>
              <div className="text-white/30 text-xs">Cuando: {t.when} &middot; Ejemplo: <code className="text-copper/70 text-xs">{t.example}</code></div>
            </div>
          ))}
        </div>
      </section>

      {/* Donde vive todo */}
      <section className="mb-10">
        <h2 className="text-xl text-copper font-semibold mb-4">Donde Vive Todo</h2>
        <div className="bg-surface rounded-xl border border-copper/10 p-6 font-mono text-sm text-white/60">
          <pre className="whitespace-pre leading-relaxed">{`~/.claude/
  homunculus/
    instincts/
      personal/         ← Instincts globales
      projects/
        mi-proyecto/    ← Instincts de proyecto
    observations/       ← Observaciones de sesiones
    identity.json       ← Tu identidad
  skills/
    mi-skill/
      SKILL.md          ← Definicion de la skill
      commands/         ← Tus commands
      agents/           ← Tus agents`}</pre>
        </div>
      </section>

      {/* Reglas de oro */}
      <section className="mb-10">
        <h2 className="text-xl text-copper font-semibold mb-4">Reglas de Oro</h2>
        <div className="space-y-3">
          {[
            'Sinapsis aprende observandote — No necesitas ensenarle nada manualmente. Solo trabaja.',
            'La confidence lo regula todo — Los instincts buenos suben, los malos bajan y desaparecen.',
            'Promueve con criterio — Solo promueve a global lo que aplica en TODOS tus proyectos.',
            'Exporta siempre — Un backup de tus instincts vale oro. Hazlo antes de cambios grandes.',
            'Comparte tus poderes — Los instincts compartidos hacen crecer a toda la comunidad.',
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-3 bg-surface rounded-lg border border-white/5 p-4">
              <span className="text-copper font-semibold">{i + 1}.</span>
              <span className="text-white/60 text-sm">{rule}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
