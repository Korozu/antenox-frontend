import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import generouted from '@generouted/react-router/plugin'

// https://vite.dev/config/
export default defineConfig({
  base: '/antenox-frontend/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    generouted(),
  ],
})
