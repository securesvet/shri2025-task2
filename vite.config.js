import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { realtimeDiff } from 'vite-plugin-realtime-diff'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), realtimeDiff("https://securesvet.github.io/shri2025-task")],
  base: "/shri2025-task2"
})
