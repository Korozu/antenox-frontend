// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div style={{ background: 'red', color: 'white', padding: '50px', fontSize: '30px' }}>
            SI TU VOIS CE MESSAGE ROUGE, LE DEPLOIEMENT FONCTIONNE.
        </div>
    </StrictMode>,
)
