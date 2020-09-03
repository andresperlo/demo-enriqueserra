import React from 'react'
import '../css/HomePage.css'
import presentacion from '../img/presentacion.jfif'
import presentacion2 from '../img/presentacion2.jfif'
import presentacion3 from '../img/presentacion3.jfif'

function Carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-css" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={presentacion} className="d-block css-img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={presentacion2} className="d-block css-img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={presentacion3} className="d-block css-img" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                </a>
            </div>
        </>
    )
}

export default Carousel