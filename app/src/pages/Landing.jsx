import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const SKILLS_MARQUEE = [
  'Detectar patrones', 'Crear instincts', 'Evolucionar skills',
  'Capturar gotchas', 'Exportar poderes', 'Content Factory',
  'Generar propuestas', 'Automatizar tareas', 'Modulos formativos',
  'Compartir instincts', 'Pipeline 4 fases', 'Anti-Dispersion',
]

const POWER_TYPES = [
  { ext: '.instinct', title: 'Instincts', desc: 'Reglas atomicas que Claude Code aprende observandote. Se activan automaticamente cuando detecta el patron.', color: 'copper' },
  { ext: '.skill', title: 'Skills', desc: 'Trajes completos de superheroe. 5+ instincts fusionados en un sistema de reglas coherente para un dominio.', color: 'blue-400' },
  { ext: '.command', title: 'Commands', desc: 'Ataques especiales personalizados. Un slash command que ejecuta tu workflow exacto con un solo golpe.', color: 'emerald-400' },
  { ext: '.agent', title: 'Agents', desc: 'Tu propio J.A.R.V.I.S. Superheroes autonomos que ejecutan misiones completas sin intervencion.', color: 'purple-400' },
  { ext: '.gotcha', title: 'Gotchas', desc: 'Tu spider-sense. Captura errores y sus soluciones para que nunca vuelvan a sorprenderte.', color: 'red-400' },
  { ext: '.export', title: 'Exports', desc: 'Comparte tus poderes con otros heroes. Importa los suyos. La Liga de la Justicia crece.', color: 'amber-400' },
]

const HEROES = [
  { name: 'Content Factory', spec: 'contenido', power: 9800, skills: 30, rank: 'LEYENDA', desc: '1 grabacion = 30 piezas' },
  { name: 'Formador Completo', spec: 'formacion', power: 7500, skills: 12, rank: 'MAESTRO', desc: 'Modulos en 3 horas' },
  { name: 'Anti-Dispersion', spec: 'productividad', power: 6200, skills: 8, rank: 'HEROE', desc: 'Bloquea distracciones' },
  { name: 'Web Architect', spec: 'desarrollo', power: 8400, skills: 22, rank: 'LEYENDA', desc: 'Stack perfecto siempre' },
  { name: 'Gotcha Hunter', spec: 'debugging', power: 5900, skills: 15, rank: 'HEROE', desc: 'Errores nunca mas' },
  { name: 'Data Alchemist', spec: 'analisis', power: 7100, skills: 18, rank: 'MAESTRO', desc: 'Datos a insights' },
]

function TerminalAnimation() {
  return (
    <div className="bg-[#0a0a0a] rounded-xl border border-copper/20 p-6 font-mono text-sm max-w-2xl mx-auto overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-amber-500/60" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
        <span className="text-white/20 text-xs ml-2">sinapsis terminal</span>
      </div>
      <div className="space-y-2">
        <div className="text-white/40">$ sinapsis install --activar-superpoderes</div>
        <div className="text-copper/60 animate-pulse" style={{animationDuration: '2s'}}>&#x2BFF; Observando tus sesiones...</div>
        <div className="text-copper/60 animate-pulse" style={{animationDuration: '2s', animationDelay: '0.3s'}}>&#x2BFF; Detectando patrones recurrentes...</div>
        <div className="text-copper/60 animate-pulse" style={{animationDuration: '2s', animationDelay: '0.6s'}}>&#x2BFF; Cristalizando instincts...</div>
        <div className="text-emerald-400 mt-2 animate-pulse" style={{animationDuration: '2s', animationDelay: '0.9s'}}>&#10003; 5 instincts detectados (confidence: 0.72-0.95)</div>
        <div className="text-copper font-bold mt-2 animate-pulse" style={{animationDuration: '2s', animationDelay: '1.2s'}}>&#10003; Superpoderes activados. Ahora Claude Code te conoce.</div>
      </div>
    </div>
  )
}

function Marquee() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-abyss to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-abyss to-transparent z-10" />
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((skill, i) => (
          <span key={i} className="inline-block px-4 py-2 bg-copper/10 border border-copper/20 rounded-full text-copper/80 text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Landing({ course, progress, currentLevel }) {
  return (
    <div className="min-h-screen bg-abyss">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-abyss/80 backdrop-blur-md border-b border-copper/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="no-underline flex items-center gap-2">
            <span className="text-copper text-2xl">&#9889;</span>
            <span className="text-white font-bold text-xl tracking-wider">SINAPSIS</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/mapa" className="text-white/50 hover:text-copper text-sm no-underline transition-colors">Mapa del Curso</Link>
            <Link to="/cheatsheet" className="text-white/50 hover:text-copper text-sm no-underline transition-colors">Guia Rapida</Link>
            <Link to="/mapa" className="bg-copper hover:bg-copper-light text-abyss font-semibold px-5 py-2 rounded-lg text-sm no-underline transition-all hover:scale-105">
              Empezar
            </Link>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-copper/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />

        <div className="relative z-10 text-center max-w-5xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-copper/20 bg-copper/5 text-copper/80 text-sm mb-8">
            Sistema de Aprendizaje Continuo para Claude Code &middot; Open Source
          </div>

          {/* Giant fragmented title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-8 tracking-tight">
            <span className="block">DESPIERTA</span>
            <span className="block text-copper">TUS</span>
            <span className="block">SUPERPODERES</span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Como Neo aprendiendo kung-fu en Matrix — Sinapsis observa como trabajas,
            detecta tus patrones y los cristaliza como superpoderes que Claude Code
            nunca olvida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/mapa"
              className="bg-copper hover:bg-copper-light text-abyss font-bold px-8 py-4 rounded-xl text-lg no-underline transition-all hover:scale-105 shadow-lg shadow-copper/25"
            >
              Despertar Superpoderes &rarr;
            </Link>
            <Link
              to="/cheatsheet"
              className="border border-white/20 hover:border-copper/50 text-white/70 hover:text-white px-8 py-4 rounded-xl text-lg no-underline transition-all"
            >
              Ver Guia Rapida
            </Link>
          </div>

          {progress.xp > 0 && (
            <div className="text-white/30 text-sm">
              Nivel: <span className="text-copper font-semibold">{currentLevel?.nombre}</span> &middot; {progress.xp} XP &middot; {progress.completed.length}/{course.nodos.length} lecciones
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce text-copper/30">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ========== MATRIX / COMO FUNCIONA ========== */}
      <section className="py-28 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="text-copper/50 text-sm tracking-[0.3em] uppercase mb-4 font-mono">// CARGANDO HABILIDADES...</div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            <span className="block">Como Neo</span>
            <span className="block text-copper">aprendiendo kung-fu</span>
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mb-4 leading-relaxed">
            En Matrix, Neo no tardo anos en aprender artes marciales. Descargo la habilidad.
            Sinapsis hace lo mismo con Claude Code.
          </p>
          <p className="text-white/40 text-base max-w-2xl mb-10">
            Trabaja normalmente y Sinapsis observa. Detecta tus patrones. Los cristaliza como instincts.
            De repente, Claude Code ya sabe como trabajas sin que tengas que repetirtelo.
          </p>

          {/* Marquee */}
          <Marquee />

          {/* Terminal */}
          <div className="mt-10">
            <TerminalAnimation />
          </div>

          <div className="text-center mt-10">
            <Link to="/mapa" className="text-copper hover:text-copper-light text-lg no-underline font-semibold transition-colors">
              Quiero mis superpoderes &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TIPOS DE SUPERPODERES ========== */}
      <section className="py-28 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 text-center">
            <span className="block">TIPOS DE</span>
            <span className="block text-copper">SUPERPODERES</span>
          </h2>
          <p className="text-white/40 text-center text-lg mb-14 max-w-xl mx-auto">
            Cada instinct es un poder nuevo. Cada evolucion te transforma.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POWER_TYPES.map((power, i) => (
              <div key={i} className="group bg-surface-2 border border-white/5 hover:border-copper/30 rounded-2xl p-6 transition-all hover:bg-surface-3">
                <div className={`text-${power.color} font-mono text-sm font-bold mb-3 opacity-60 group-hover:opacity-100 transition-opacity`}>
                  {power.ext}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{power.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{power.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LAS 4 FASES ========== */}
      <section className="py-28 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 text-center">
            <span className="block">EL PIPELINE</span>
            <span className="block text-copper">DE 4 FASES</span>
          </h2>
          <p className="text-white/40 text-center text-lg mb-14 max-w-xl mx-auto">
            Como el entrenamiento en la Escuela Xavier. Cada fase te acerca a controlar tus poderes.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Observacion', desc: 'Sinapsis observa cada sesion. Que ficheros editas, que patrones repites, que errores corriges.', icon: '&#128065;' },
              { n: '02', title: 'Deteccion', desc: 'Identifica patrones recurrentes. "Siempre usa Tailwind", "Corrige CORS asi", "Prefiere React FC".', icon: '&#128269;' },
              { n: '03', title: 'Instincts', desc: 'Cristaliza los patrones como reglas YAML atomicas con confidence scoring. Cada instinct es un superpoder.', icon: '&#9889;' },
              { n: '04', title: 'Evolucion', desc: '5+ instincts del mismo dominio se fusionan en una skill completa. Como construir tu armadura de Iron Man.', icon: '&#128640;' },
            ].map((phase, i) => (
              <div key={i} className="relative group">
                <div className="bg-surface-2 border border-white/5 group-hover:border-copper/30 rounded-2xl p-6 h-full transition-all">
                  <div className="text-copper/30 font-mono text-xs mb-4">{phase.n}</div>
                  <div className="text-3xl mb-3" dangerouslySetInnerHTML={{__html: phase.icon}} />
                  <h3 className="text-copper text-lg font-bold mb-2">{phase.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{phase.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-copper/20 text-xl">&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOMUNCULO ========== */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        {/* Subtle brain-like glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-copper/5 rounded-full blur-[180px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-copper/50 text-sm tracking-[0.3em] uppercase mb-4 font-mono text-center">Neurociencia + IA</div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 text-center">
            <span className="block">EL HOMUNCULO</span>
            <span className="block text-copper">DE SINAPSIS</span>
          </h2>

          <p className="text-white/40 text-center text-lg mb-14 max-w-2xl mx-auto">
            La carpeta <span className="text-copper font-mono text-base">~/.claude/homunculus/</span> es el cerebro persistente de tu Claude Code
          </p>

          {/* Main grid: image + explanation */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            {/* Homúnculo image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-copper/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-surface-2 border border-copper/10 rounded-2xl p-4 overflow-hidden">
                <img
                  src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/202538bc-bbc0-5cda-8a13-d6675ed29bd5/f25c6613-be44-5615-9d15-990787511c32.jpg"
                  alt="Homunculo de Penfield - Representacion del cerebro de Sinapsis"
                  className="w-full rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-abyss/80 backdrop-blur-sm rounded-lg p-3 border border-copper/10">
                  <div className="text-copper text-xs font-mono">Homunculo de Penfield</div>
                  <div className="text-white/40 text-xs mt-1">Las partes mas usadas del cerebro se representan mas grandes</div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-3">La Analogia</h3>
                <p className="text-white/50 leading-relaxed">
                  En neurociencia, el homunculo de Penfield es una representacion distorsionada del cuerpo
                  donde las manos, labios y lengua aparecen enormes porque el cerebro les dedica mas espacio.
                </p>
                <p className="text-white/40 leading-relaxed mt-3">
                  Sinapsis hace lo mismo: <span className="text-copper">agranda y refuerza los patrones que mas usas</span>.
                  Tus instincts mas frecuentes ganan confidence, evolucionan en skills, y se convierten en areas
                  especializadas de tu cerebro digital.
                </p>
              </div>

              {/* Neural mapping */}
              <div className="space-y-3">
                {[
                  { left: 'Observaciones', right: 'Sensores', desc: 'Los hooks capturan cada accion como terminaciones nerviosas', icon: '🔬' },
                  { left: 'Instincts', right: 'Sinapsis', desc: 'Cada patron validado es una conexion sinaptica consolidada', icon: '⚡' },
                  { left: 'Skills', right: 'Areas Corticales', desc: 'Skills evolucionadas son areas especializadas del cerebro', icon: '🧠' },
                  { left: 'Confidence', right: 'Plasticidad', desc: 'La confianza sube/baja como la plasticidad sinaptica', icon: '📈' },
                ].map((mapping, i) => (
                  <div key={i} className="flex items-start gap-3 bg-surface-2/50 border border-white/5 rounded-xl p-3 hover:border-copper/15 transition-colors">
                    <span className="text-lg mt-0.5">{mapping.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-copper font-semibold">{mapping.left}</span>
                        <span className="text-white/20">&rarr;</span>
                        <span className="text-white/60">{mapping.right}</span>
                      </div>
                      <div className="text-white/30 text-xs mt-0.5">{mapping.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* File structure */}
          <div className="bg-[#0a0a0a] rounded-2xl border border-copper/15 p-6 font-mono text-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="text-white/20 text-xs ml-2">~/.claude/homunculus/</span>
            </div>
            <div className="space-y-1 text-white/50">
              <div><span className="text-copper">├──</span> <span className="text-blue-400">identity.json</span> <span className="text-white/20">— Tu perfil (nombre, stack, marcas)</span></div>
              <div><span className="text-copper">├──</span> <span className="text-blue-400">config.json</span> <span className="text-white/20">— Configuracion del sistema</span></div>
              <div><span className="text-copper">├──</span> instincts/</div>
              <div><span className="text-copper">│  ├──</span> <span className="text-emerald-400">personal/</span> <span className="text-white/20">— Instincts globales auto-aprendidos</span></div>
              <div><span className="text-copper">│  └──</span> <span className="text-emerald-400">inherited/</span> <span className="text-white/20">— Instincts importados</span></div>
              <div><span className="text-copper">├──</span> evolved/</div>
              <div><span className="text-copper">│  ├──</span> <span className="text-purple-400">skills/</span> <span className="text-white/20">— Skills evolucionadas (automaticas)</span></div>
              <div><span className="text-copper">│  ├──</span> <span className="text-purple-400">commands/</span> <span className="text-white/20">— Commands (manuales)</span></div>
              <div><span className="text-copper">│  └──</span> <span className="text-purple-400">agents/</span> <span className="text-white/20">— Agents (multi-paso)</span></div>
              <div><span className="text-copper">├──</span> exports/ <span className="text-white/20">— Backups YAML</span></div>
              <div><span className="text-copper">└──</span> projects/</div>
              <div><span className="text-copper">   └──</span> &lt;hash&gt;/</div>
              <div><span className="text-copper">      ├──</span> <span className="text-amber-400">observations.jsonl</span></div>
              <div><span className="text-copper">      └──</span> <span className="text-amber-400">instincts/</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HEROES / AGENTS ========== */}
      <section className="py-28 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="text-copper/50 text-sm tracking-[0.2em] uppercase mb-4">&#9889; Tu equipo de superheroes</div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-14">
            <span className="block">CONOCE A LOS</span>
            <span className="text-copper">SUPERHEROES</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HEROES.map((hero, i) => (
              <div key={i} className="bg-surface-2 border border-white/5 hover:border-copper/20 rounded-2xl p-6 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold tracking-wider ${
                    hero.rank === 'LEYENDA' ? 'bg-amber-500/20 text-amber-400' :
                    hero.rank === 'MAESTRO' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-copper/20 text-copper'
                  }`}>
                    {hero.rank}
                  </span>
                  <span className="text-white/20 text-xs font-mono">{hero.spec}</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-1 group-hover:text-copper transition-colors">{hero.name}</h3>
                <p className="text-white/30 text-sm mb-4">{hero.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div>
                    <span className="text-copper font-bold text-lg">{hero.power.toLocaleString()}</span>
                    <span className="text-white/20 text-xs ml-1">PWR</span>
                  </div>
                  <div className="text-white/20 text-xs">
                    <span className="text-white/40 font-semibold">{hero.skills}</span> skills
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUE APRENDERAS ========== */}
      <section className="py-28 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 text-center">
            <span className="block">EL CURSO</span>
            <span className="block text-copper">EN NUMEROS</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-14 mb-16">
            {[
              { n: course.nodos.length, label: 'Lecciones', sub: 'De cero a maestro' },
              { n: course.zonas.length, label: 'Zonas', sub: 'Progresion natural' },
              { n: `${course.duracion_estimada_horas}h`, label: 'Duracion', sub: 'A tu ritmo' },
              { n: course.nodos.reduce((s, n) => s + n.xp, 0), label: 'XP Total', sub: 'Gamificado' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-5xl md:text-6xl font-black text-copper group-hover:scale-110 transition-transform">{stat.n}</div>
                <div className="text-white text-sm font-semibold mt-2">{stat.label}</div>
                <div className="text-white/30 text-xs mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Zonas preview */}
          <div className="grid md:grid-cols-4 gap-4">
            {course.zonas.map((zona, i) => (
              <div key={i} className="bg-surface-2 border border-white/5 rounded-xl p-5 hover:border-copper/20 transition-all">
                <div className="text-copper/40 font-mono text-xs mb-2">ZONA {i + 1}</div>
                <h3 className="text-white font-bold text-sm mb-1">{zona.nombre}</h3>
                <p className="text-white/30 text-xs">{zona.tema_hero}</p>
                <div className="text-white/20 text-xs mt-3">
                  {course.nodos.filter(n => n.zona === zona.id).length} lecciones
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-copper/3 to-transparent" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            <span className="block">&#191;LISTO</span>
            <span className="block text-copper">PARA VOLAR?</span>
          </h2>

          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
            14 lecciones. 4 zonas. De civil a Vengador.
            Despierta tus superpoderes y unete a la Liga.
          </p>

          <Link
            to="/mapa"
            className="inline-block bg-copper hover:bg-copper-light text-abyss font-black px-10 py-5 rounded-xl text-xl no-underline transition-all hover:scale-105 shadow-xl shadow-copper/30"
          >
            Comenzar el Curso
          </Link>

          <div className="mt-6 text-white/20 text-sm">
            Gratis &middot; Sin registro &middot; Empieza ahora
          </div>

          {/* Spider-Man quote */}
          <blockquote className="mt-16 border-t border-copper/10 pt-8">
            <p className="font-display text-copper/50 text-xl italic">
              &ldquo;Un gran poder conlleva una gran responsabilidad&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <div className="text-white/20 text-sm">
          SINAPSIS &middot; Open Source &middot; Powered by Claude Code
        </div>
        <div className="text-white/10 text-xs mt-2">
          por {course.metadata.autor} &middot; {course.metadata.fecha_creacion}
        </div>
      </footer>
    </div>
  )
}
