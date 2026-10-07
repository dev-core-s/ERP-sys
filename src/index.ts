import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'nodejs' // or 'edge'
}

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from Hono API!' })
})

// Export the Vercel handler
export default handle(app)