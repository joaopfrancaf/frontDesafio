import { Routes, Route, Link } from "react-router-dom";

export function Navbar () {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='incluir'>Incluir</Link></li>
                <li><Link to='Consulta'>Consulta</Link></li>

            </ul>
        </nav>
    )
}