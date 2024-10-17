import Inicio  from './paginas/inicio.jsx';
import AcercaDe from './paginas/acercaDe.jsx';
import Experiencias  from './paginas/experiencias.jsx';
import Registro from  './paginas/registro.jsx';
import { createBrowserRouter } from "react-router-dom";
import Estructura from './paginas/estructura.jsx';

const Rutas = createBrowserRouter([
  {
    path: "/",
    element: <Estructura />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "Acerca", element: <AcercaDe /> },
      { path: "Registro", element: <Registro />},
      { path: "Experiencias", element: <Experiencias /> },
      
    ],
  },
]);

export default  Rutas;