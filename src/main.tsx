import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './i18n'
import './index.css'


const rootElement = document.getElementById('root')

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    )
}
