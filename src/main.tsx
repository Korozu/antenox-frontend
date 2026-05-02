import { createRoot } from 'react-dom/client'
import './index.css'


const rootElement = document.getElementById('root')

if (rootElement) {
    createRoot(rootElement).render(
        <div className="h-screen w-screen bg-grunge-white flex flex-col items-center justify-center">
            <h1 className="text-black text-4xl font-bold border-4 border-black p-4">
                ANTENOX TEST SANS ROUTEUR
            </h1>
            <p className="mt-4 text-black">Si tu vois ça, le déploiement est OK.</p>
        </div>
    )
}
