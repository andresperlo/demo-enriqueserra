import React from 'react'
import '../css/HomePage.css'
import presentacion from '../img/presentacion.jfif'
import presentacion2 from '../img/presentacion2.jfif'
import presentacion3 from '../img/presentacion3.jfif'
import portadaoro from '../img/PortadaOro.jfif'
import portadaplata from '../img/PortadaPlata.jfif'
import portadaa from '../img/PortadaA.jfif'



function HomePage() {
    return (
        <>
            <nav class="navbar navbar-expand-lg class-nav">
                <a class="navbar-brand" href="/">Enrique Serra</a>
                <button class="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse class-UlLi navbar-collapse css-nav" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Prestadores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Empresa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cementerios</a>
                        </li>
                        <li class="nav-item d-lg-none d-sm-block">
                            <a class="nav-link" href="#">Registrarse</a>
                        </li>
                        <li class="nav-item d-lg-none d-sm-block">
                            <a class="nav-link" href="#">Iniciar Sesion</a>
                        </li>
                    </ul>
                </div>
                <div className='d-none d-md-none d-lg-block class-regini'>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Registrarse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Iniciar Sesion</a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade carousel-css" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={presentacion} class="d-block css-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={presentacion2} class="d-block css-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={presentacion3} class="d-block css-img" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    </a>
                </div>
            </div>
            <div className='text-center py-3'>
                <h2 className='pb-3'>Planes de Sepelio</h2>
                <div className="container">
                    <div className='card-columns'>
                        <div>
                            <img src={portadaoro} class="card-img-top w-75" alt="..." />
                        </div>
                        <div className='planPlatacss'>
                            <img src={portadaplata} class="card-img-top w-75" alt="..." />
                        </div>
                        <div>
                            <img src={portadaa} class="card-img-top w-75" alt="..." />
                        </div>
                    </div>
                </div>

            </div>
            <footer className='mt-3 py-3 class-nav text-white Class-Footer'>
                <div>
                    <h4>Enrique Serra</h4>
                </div>
                <div className='text-center'>
                    <h4>Seguinos en las Redes</h4>
                    <div className='redes-sociales'>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram mx-3"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-whatsapp ml-3"></i>
                    </div>
                </div>
                <div className='text-center'> 
                    <h4>Nuestra Oficina en San Miguel</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d558.4607873287847!2d-65.21218290752056!3d-26.828122148946512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c14840db2f3%3A0x9455db676b96ebb7!2sGral.%20Jos%C3%A9%20de%20San%20Mart%C3%ADn%20999%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1599083469132!5m2!1ses-419!2sar" width="300" height="250" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </footer>
        </>
    )
}

export default HomePage