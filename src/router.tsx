import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/index';
import { MainLayout } from './pages/MainLayout.tsx';
import { AlbumPage } from './pages/album';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
          {
              index: true,
              element: <HomePage />,
          },
          {
              path: 'photos/:title',
              element: <AlbumPage />,
          },
          {
              path: '*',
              element: <HomePage />
          }
      ]
    },
  ],
  {
    basename: import.meta.BASE_URL,
  }
)
