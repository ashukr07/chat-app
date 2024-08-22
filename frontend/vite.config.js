import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    //CORS error only in development as in production both will have same domain
    proxy:{
      "/api":{
        target:"http://localhost:5000"
      }
    }
  }
})
