import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react'
import { MainLayout } from '@components';

const HomePage     = lazy(() => import('@pages/home'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage/> },
    ],
  },
]);