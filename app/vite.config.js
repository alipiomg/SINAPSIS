import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

function courseDataPlugin() {
  const courseDir = path.resolve(__dirname, '../curso-sinapsis-v1.0')
  return {
    name: 'course-data',
    configureServer(server) {
      server.middlewares.use('/api/course', (req, res) => {
        const data = JSON.parse(fs.readFileSync(path.join(courseDir, 'course.json'), 'utf-8'))
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      })
      server.middlewares.use('/api/gamification', (req, res) => {
        const data = JSON.parse(fs.readFileSync(path.join(courseDir, 'gamification.json'), 'utf-8'))
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      })
      server.middlewares.use((req, res, next) => {
        const match = req.url?.match(/^\/api\/concept\/(.+)$/)
        if (match) {
          const id = match[1]
          const filePath = path.join(courseDir, 'concepts', `${id}.json`)
          if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
          } else {
            res.statusCode = 404
            res.end(JSON.stringify({ error: 'Concept not found' }))
          }
        } else {
          next()
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), courseDataPlugin()],
  server: { port: 3000 }
})
