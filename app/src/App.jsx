import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from './pages/Landing'
import CourseMap from './pages/CourseMap'
import Lesson from './pages/Lesson'
import Cheatsheet from './pages/Cheatsheet'
import Navbar from './components/Navbar'

function App() {
  const [course, setCourse] = useState(null)
  const [gamification, setGamification] = useState(null)
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('sinapsis-progress')
    return saved ? JSON.parse(saved) : { completed: [], xp: 0, badges: [] }
  })

  useEffect(() => {
    fetch('/course.json').then(r => r.json()).then(setCourse)
    fetch('/gamification.json').then(r => r.json()).then(setGamification)
  }, [])

  useEffect(() => {
    localStorage.setItem('sinapsis-progress', JSON.stringify(progress))
  }, [progress])

  const completeLesson = (nodeId, xp) => {
    if (progress.completed.includes(nodeId)) return
    setProgress(prev => ({
      ...prev,
      completed: [...prev.completed, nodeId],
      xp: prev.xp + xp
    }))
  }

  const currentLevel = gamification?.niveles
    ?.slice().reverse().find(n => progress.xp >= n.xp_minimo) || null

  if (!course || !gamification) {
    return (
      <div className="min-h-screen bg-abyss flex items-center justify-center">
        <div className="text-copper animate-pulse text-2xl font-display">Cargando Sinapsis...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-abyss">
      <Routes>
        <Route path="/" element={<Landing course={course} progress={progress} currentLevel={currentLevel} />} />
        <Route path="/mapa" element={
          <>
            <Navbar progress={progress} currentLevel={currentLevel} gamification={gamification} />
            <CourseMap course={course} progress={progress} gamification={gamification} />
          </>
        } />
        <Route path="/leccion/:id" element={
          <>
            <Navbar progress={progress} currentLevel={currentLevel} gamification={gamification} />
            <Lesson course={course} progress={progress} completeLesson={completeLesson} gamification={gamification} />
          </>
        } />
        <Route path="/cheatsheet" element={
          <>
            <Navbar progress={progress} currentLevel={currentLevel} gamification={gamification} />
            <Cheatsheet />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
