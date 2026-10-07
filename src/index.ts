import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

const welcomeStrings = [
  'Hello Hono!',
  'To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono'
]

// API routes
app.get('/api', (c) => {
  return c.text(welcomeStrings.join('\n\n'))
})

// 1. Serve static files (JS, CSS, images, etc.) from the dist directory
app.use('/*', serveStatic({ root: './frontend/dist' }))

// 2. Catch-all fallback to index.html for React Router
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app