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
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          '</head>',
          `  <!-- Start Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
    <!-- End Single Page Apps for GitHub Pages -->
  </head>`
        )
      }
    }
  ],
})
