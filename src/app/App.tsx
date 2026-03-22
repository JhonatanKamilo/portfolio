import { RouterProvider } from 'react-router-dom';
import { Suspense }       from 'react';
import { router }         from './router';
import { Providers }      from './providers';

export default function App() {
  return (
    <Providers>
      <Suspense fallback={<div>Cargando...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  );
}