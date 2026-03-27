import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ progress, currentLevel, gamification }) {
  const location = useLocation()
  const nextLevel = gamification?.niveles?.find(n => n.xp_minimo > progress.xp)
  const progressToNext = nextLevel
    ? ((progress.xp - (currentLevel?.xp_minimo || 0)) / (nextLevel.xp_minimo - (currentLevel?.xp_minimo || 0))) * 100
    : 100

  return (
    <nav className="sticky top-0 z-50 bg-abyss/90 backdrop-blur-md border-b border-copper/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-copper text-xl">&#9889;</span>
          <span className="font-display text-copper text-lg">Sinapsis</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/mapa"
            className={`text-sm no-underline transition-colors ${location.pathname === '/mapa' ? 'text-copper' : 'text-white/60 hover:text-white'}`}
          >
            Mapa
          </Link>
          <Link
            to="/cheatsheet"
            className={`text-sm no-underline transition-colors ${location.pathname === '/cheatsheet' ? 'text-copper' : 'text-white/60 hover:text-white'}`}
          >
            Guia Rapida
          </Link>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="text-right">
              <div className="text-xs text-white/40">{currentLevel?.nombre || 'Civil'}</div>
              <div className="text-sm text-copper font-semibold">{progress.xp} XP</div>
            </div>
            <div className="w-20 h-2 bg-surface-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-copper-dark to-copper rounded-full transition-all duration-500"
                style={{ width: `${progressToNext}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
