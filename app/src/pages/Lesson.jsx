import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Lesson({ course, progress, completeLesson, gamification }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [concept, setConcept] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showReto, setShowReto] = useState(false)

  const node = course.nodos.find(n => n.id === id)
  const nodeIndex = course.nodos.findIndex(n => n.id === id)
  const prevNode = nodeIndex > 0 ? course.nodos[nodeIndex - 1] : null
  const nextNode = nodeIndex < course.nodos.length - 1 ? course.nodos[nodeIndex + 1] : null
  const isCompleted = progress.completed.includes(id)

  useEffect(() => {
    setLoading(true)
    setShowReto(false)
    fetch(`/api/concept/${id}`)
      .then(r => r.json())
      .then(data => { setConcept(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (!node) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl text-white mb-4">Leccion no encontrada</h1>
        <Link to="/mapa" className="text-copper no-underline">Volver al mapa</Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-copper animate-pulse text-xl font-display">Cargando leccion...</div>
      </div>
    )
  }

  const s = concept?.secciones || {}

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/mapa" className="text-white/40 text-sm no-underline hover:text-copper transition-colors">
          ← Volver al mapa
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-2">
          <span className="text-copper/40 text-sm">#{node.numero}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            node.tipo === 'teoria' ? 'bg-copper/20 text-copper' :
            node.tipo === 'practica' ? 'bg-blue-500/20 text-blue-400' :
            'bg-gold/20 text-gold'
          }`}>
            {node.tipo}
          </span>
          <span className="text-white/30 text-xs">{node.xp} XP</span>
          {isCompleted && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">Completada</span>}
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-white">{node.titulo}</h1>
        <p className="text-white/50 mt-2">{node.descripcion_corta}</p>
      </div>

      {/* Explicacion */}
      {s.explicacion && (
        <section className="mb-10">
          <h2 className="text-lg text-copper font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center text-sm">📖</span>
            Explicacion
          </h2>
          <div className="text-white/70 leading-relaxed space-y-4 pl-10">
            {s.explicacion.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* Metafora */}
      {s.metafora && (
        <section className="mb-10">
          <h2 className="text-lg text-copper font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center text-sm">🦸</span>
            Metafora del Superheroe
          </h2>
          <blockquote className="border-l-2 border-copper/40 pl-6 py-3 bg-surface-2 rounded-r-xl ml-10">
            <p className="text-copper-light/80 italic leading-relaxed">{s.metafora}</p>
          </blockquote>
        </section>
      )}

      {/* Ejemplo */}
      {s.ejemplo && (
        <section className="mb-10">
          <h2 className="text-lg text-copper font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center text-sm">💻</span>
            Ejemplo Real
          </h2>
          <div className="bg-surface rounded-xl border border-copper/10 p-6 ml-10 overflow-x-auto">
            <pre className="text-sm text-white/70 whitespace-pre-wrap leading-relaxed">{s.ejemplo}</pre>
          </div>
        </section>
      )}

      {/* Mini Reto */}
      {s.mini_reto && (
        <section className="mb-10">
          <h2 className="text-lg text-copper font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center text-sm">🎯</span>
            Mini-Reto
          </h2>
          <div className="ml-10">
            {!showReto ? (
              <button
                onClick={() => setShowReto(true)}
                className="bg-surface-2 border border-copper/20 text-copper px-5 py-3 rounded-lg hover:bg-copper/10 transition-colors cursor-pointer"
              >
                Mostrar el reto
              </button>
            ) : (
              <div className="bg-surface-2 border border-copper/20 rounded-xl p-6">
                <p className="text-white/70 leading-relaxed">{s.mini_reto}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Glosario */}
      {s.glosario && s.glosario.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg text-copper font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center text-sm">📚</span>
            Glosario
          </h2>
          <div className="space-y-3 ml-10">
            {s.glosario.map((item, i) => (
              <div key={i} className="bg-surface rounded-lg border border-white/5 p-4">
                <dt className="text-copper font-semibold text-sm">{item.termino}</dt>
                <dd className="text-white/60 text-sm mt-1">{item.definicion}</dd>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Complete button */}
      {!isCompleted && (
        <div className="text-center py-8 border-t border-copper/10">
          <button
            onClick={() => {
              completeLesson(id, node.xp)
            }}
            className="bg-copper hover:bg-copper-light text-abyss font-semibold px-8 py-3 rounded-lg text-lg transition-all hover:scale-105 cursor-pointer"
          >
            Completar Leccion (+{node.xp} XP)
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center py-8 border-t border-white/5">
        {prevNode ? (
          <Link to={`/leccion/${prevNode.id}`} className="text-white/40 hover:text-copper no-underline text-sm transition-colors">
            ← {prevNode.titulo}
          </Link>
        ) : <div />}
        {nextNode ? (
          <Link to={`/leccion/${nextNode.id}`} className="text-white/40 hover:text-copper no-underline text-sm transition-colors">
            {nextNode.titulo} →
          </Link>
        ) : (
          <Link to="/mapa" className="text-copper no-underline text-sm font-semibold">
            Volver al mapa
          </Link>
        )}
      </div>
    </div>
  )
}
