import React from 'react'
import '../css/HomePage.css'
import portadaEmpresa from '../img/portadaEmpresa.jfif'

function Carousel() {
    return (
        <>
            <div>
                <img src={portadaEmpresa} className='portada-css' alt="" />
            </div>
        </>
    )
}

export default Carousel