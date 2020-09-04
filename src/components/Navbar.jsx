import React from 'react'
import '../css/HomePage.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg class-nav">
            <a className="navbar-brand" href="/">Enrique Serra</a>
            <button className="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse class-UlLi navbar-collapse css-nav" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/prestadores">Prestadores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/empresa">Empresa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cementerio">Cementerio</a>
                    </li>
                    <li className="nav-item d-lg-none d-sm-block">
                        <a className="nav-link" href="#">Registrarse</a>
                    </li>
                    <li className="nav-item d-lg-none d-sm-block">
                        <a className="nav-link" href="#">Iniciar Sesion</a>
                    </li>
                </ul>
            </div>
            <div className='d-none d-md-none d-lg-block class-regini'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Registrarse</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Iniciar Sesion</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar