import React from 'react'
import '../css/HomePage.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg class-nav">
            <a className="navbar-brand" href="/demo-enriqueserra">Enrique Serra</a>
            <button className="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse class-UlLi navbar-collapse css-nav" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/demo-enriqueserra">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Prestadores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/demo-enriqueserra/empresa">Empresa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/demo-enriqueserra/contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cementerios</a>
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