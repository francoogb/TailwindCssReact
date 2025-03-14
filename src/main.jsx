import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CounterProvider } from './context/CounterContext.jsx'; // Asegúrate de importar el provider
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Corregido
import Frontends from './components/Frontends.jsx';
import Home from './paginas/Home.jsx';

// Definir las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontends />, // Renderizar Frontends como componente principal
    children: [
      {
        index: true, // Hacer que esta ruta sea la predeterminada para /
        element: <Home />, // Este es el componente que se renderiza en / (Home)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>  {/* Asegúrate de envolver el contenido en el proveedor */}
      <RouterProvider router={router} />  {/* Usar RouterProvider para aplicar las rutas */}
    </CounterProvider>
  </StrictMode>
);
