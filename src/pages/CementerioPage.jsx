import React from 'react'
import '../css/CementerioPage.css'
import alameda from '../img/alameda.png'
import entrada from '../img/cementerioentrada.jfif'
import capilla from '../img/cementerio1.jfif'
import parque1 from '../img/cementerio4.jfif'
import parcela from '../img/parcela.jfif'


function CementerioPage() {
    return (
        <>
            <div>
                <img src={alameda} className='img-fluid' alt="" />
            </div>
            <div>
                <h3 className='py-3 text-center'>Servicios</h3>
            </div>
            <div className='container py-3'>
                <div className='card-columns'>
                    <div class="card">
                        <img src={entrada} class="card-img-top cards-imgcss" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Entrada</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={capilla} class="card-img-top cards-imgcss" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Capilla</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={parcela} class="card-img-top cards-imgcss" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Parcelas</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-3'>
                <h3>Si Necesita Adquirir una Parcela haga <a href='/comprarplan'>click aqui.</a></h3>
            </div>
        </>
    )
}

export default CementerioPage