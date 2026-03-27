import { Link } from 'react-router-dom'

const ZONE_COLORS = {
  'plaza-sinapsis': { border: 'border-copper/30', bg: 'bg-copper/5', tag: 'bg-copper/20 text-copper' },
  'laboratorio-sinaptico': { border: 'border-blue-500/30', bg: 'bg-blue-500/5', tag: 'bg-blue-500/20 text-blue-400' },
  'taller-casos-uso': { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', tag: 'bg-emerald-500/20 text-emerald-400' },
  'foro-comunidad': { border: 'border-purple-500/30', bg: 'bg-purple-500/5', tag: 'bg-purple-500/20 text-purple-400' },
}

const TYPE_ICONS = {
  teoria: '📖',
  practica: '⚡',
  reto: '🏆',
}

export default function CourseMap({ course, progress, gamification }) {
  const isCompleted = (id) => progress.completed.includes(id)
  const isLocked = (node) => {
    if (node.prerequisitos.length === 0) return false
    return !node.prerequisitos.every(p => progress.completed.includes(p))
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl text-white mb-2">Mapa del Curso</h1>
        <p className="text-white/40">
          {progress.completed.length} de {course.nodos.length} lecciones completadas &middot; {progress.xp} XP
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {gamification.badges.map(badge => {
          const earned = progress.completed.length > 0 && (
            (badge.id === 'origen' && isCompleted('que-es-sinapsis')) ||
            (badge.id === 'primer-poder' && isCompleted('primer-contacto')) ||
            (badge.id === 'entrenamiento-xavier' && ['que-es-sinapsis','pipeline-4-fases','instincts-corazon','primer-contacto'].every(id => isCompleted(id))) ||
            (badge.id === 'laboratorio-stark' && ['comandos-basicos','evolve-superpoderes','gotchas-errores','export-import-backup'].every(id => isCompleted(id))) ||
            (badge.id === 'mision-completada' && ['caso-uso-webs','caso-uso-contenido','caso-uso-facturas','caso-uso-formacion'].some(id => isCompleted(id))) ||
            (badge.id === 'avenger' && ['caso-uso-webs','caso-uso-contenido','caso-uso-facturas','caso-uso-formacion'].every(id => isCompleted(id))) ||
            (badge.id === 'forker' && isCompleted('foro-compartir')) ||
            (badge.id === 'spider-sense' && isCompleted('tu-propio-sinapsis'))
          )
          return (
            <div
              key={badge.id}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border transition-all ${
                earned
                  ? 'border-copper bg-copper/10 text-copper'
                  : 'border-white/10 bg-surface-2 text-white/30'
              }`}
              title={badge.descripcion}
            >
              <span>{badge.icono}</span>
              <span>{badge.nombre}</span>
            </div>
          )
        })}
      </div>

      {/* Zones */}
      {course.zonas.map(zona => {
        const zoneNodes = course.nodos.filter(n => n.zona === zona.id)
        const colors = ZONE_COLORS[zona.id] || ZONE_COLORS['plaza-sinapsis']
        const zoneCompleted = zoneNodes.filter(n => isCompleted(n.id)).length

        return (
          <div key={zona.id} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-2 py-0.5 rounded-full ${colors.tag}`}>
                Zona {zona.nivel_requerido}
              </span>
              <h2 className="text-xl text-white font-semibold">{zona.nombre}</h2>
              <span className="text-white/30 text-sm">{zoneCompleted}/{zoneNodes.length}</span>
            </div>
            <p className="text-white/40 text-sm mb-4">{zona.tema_hero}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {zoneNodes.map(node => {
                const completed = isCompleted(node.id)
                const locked = isLocked(node)

                return (
                  <Link
                    key={node.id}
                    to={locked ? '#' : `/leccion/${node.id}`}
                    className={`block rounded-xl border p-5 transition-all no-underline group ${
                      completed
                        ? 'border-copper/40 bg-copper/5'
                        : locked
                        ? 'border-white/5 bg-surface opacity-50 cursor-not-allowed'
                        : `${colors.border} ${colors.bg} hover:border-copper/50 hover:scale-[1.02]`
                    }`}
                    onClick={e => locked && e.preventDefault()}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{completed ? '✅' : locked ? '🔒' : TYPE_ICONS[node.tipo]}</span>
                        <span className="text-white/30 text-sm">#{node.numero}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${completed ? 'bg-copper/20 text-copper' : 'bg-white/5 text-white/30'}`}>
                        {node.xp} XP
                      </span>
                    </div>
                    <h3 className={`font-semibold mb-1 ${completed ? 'text-copper' : 'text-white'}`}>
                      {node.titulo}
                    </h3>
                    <p className="text-white/40 text-sm">{node.descripcion_corta}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
