const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const dbPath = path.join(__dirname, 'data', 'db.json')
const ensureDb = () => {
  if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true })
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ projects: [], messages: [] }, null, 2), 'utf-8')
  }
}
ensureDb()

const readDb = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
const writeDb = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8')

// Seed sample projects if empty
app.get('/api/projects', (req, res) => {
  const db = readDb()
  if (!db.projects || db.projects.length === 0) {
    db.projects = [
      { id: 'p1', name: 'Neon Portfolio', description: '基于 Vue 的炫酷个人站点模板', tech: ['Vue', 'Vite', 'AOS'], image: 'https://images.unsplash.com/photo-1529333166437-7750aa0f73b0?w=800&q=80', github: 'https://github.com/', demo: '#', category: 'frontend' },
      { id: 'p2', name: 'AI Helper', description: '集成 OpenAI 的智能问答小工具', tech: ['JavaScript', 'API'], image: 'https://images.unsplash.com/photo-1550745165-9f2b0e44a883?w=800&q=80', category: 'ai' },
      { id: 'p3', name: 'Dev Toolkit', description: '常用开发小工具集合', tech: ['Node', 'Express'], image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80', category: 'tool' },
    ]
    writeDb(db)
  }
  res.json(db.projects)
})

app.get('/api/projects/:id', (req, res) => {
  const db = readDb()
  const item = db.projects.find((p) => p.id === req.params.id)
  if (!item) return res.status(404).json({ error: 'Not found' })
  res.json(item)
})

app.post('/api/messages', (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })
  const db = readDb()
  const msg = { id: String(Date.now()), name, email, message, createdAt: new Date().toISOString() }
  db.messages.push(msg)
  writeDb(db)
  res.status(201).json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`)
})