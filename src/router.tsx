import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/index';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <HomePage />, // Redirection vers la page d'accueil pour les routes non trouvées
    },
  ],
  {
    basename: import.meta.BASE_URL,
  }
)
