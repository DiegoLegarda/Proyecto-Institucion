import BarraNavegacion from "../componentes/barraNavegacion"
import Pie from "../componentes/piePagina.jsx";
import { Outlet } from "react-router-dom";

function Estructura() {
    return (
        <div> 
            <BarraNavegacion />
            <main>
                <div className='Container'>
                    <Outlet />
                </div>
            </main>
            <Pie/>
        </div>
    )
}

export default Estructura;