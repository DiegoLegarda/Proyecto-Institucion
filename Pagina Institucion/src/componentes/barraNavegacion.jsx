import { Link } from 'react-router-dom';


function BarraNavegacion() {
  return (
    <header>
    <div >
      <div>
        <img src="/icono.png" alt="Logo de la página" />
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/Acerca">Acerca</Link>
        <Link to="/Registro">Registro</Link>
        <Link to="/Experiencias">Experiencias</Link>          
      </nav>

    </div>
  </header>   




  );
}

export default BarraNavegacion;