import React from 'react'
import portadaoro from '../img/PortadaOro.jfif'
import portadaplata from '../img/PortadaPlata.jfif'
import portadaa from '../img/PortadaA.jfif'
import planasist from '../img/PlanAsist.jpeg'
import espresentacion from '../img/espresentacion2.jpeg'

function Main() {
    return (
        <>
            <div className='text-center py-3'>
                <h2>Atencion las 24 HS, los 365 dias</h2>
                <h4>Jubilados, Pensionados y Obra Sociales</h4>
            </div>
            <div className='container'>
                <div className='divEsPresentacion'>
                    <img src={espresentacion} className='imgEsPresentacion border border-dark' alt="" />
                    <div className='LetraH3EsPre pl-3 pt-3 text-justify'>
                        <h3>Somos una empresa con gran experiencia, con la más alta calidad y eficiencia.</h3>
                        <h3>Le brindamos todo lo que está a nuestro alcance para que sobrelleve este momento difícil, con el debido respeto e integridad.</h3>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='py-3 text-center'>Planes de Sepelio</h2>
                <div className='container'>
                    <div className='card-columns'>
                        <div >
                            <a href='/planoro'><img src={portadaoro} className="card-img-top w-75" alt="..." /></a>
                        </div>
                        <div className='planPlatacss'>
                           <a href='/planplata'> <img src={portadaplata} className="card-img-top w-75" alt="..." /> </a>
                        </div>
                        <div>
                          <a href='/plana'><img src={portadaa} className="card-img-top w-75" alt="..." /></a>
                        </div>
                    </div>
                </div>
                <h2 className='py-3 text-center'>Plan de Sepelio con Medicos</h2>
                <div className="container">
                    <div className='card-columns d-flex justify-content-center'>
                        <div>
                           <a href='/planasist'><img src={planasist} className="card-img-top w-50" alt="..." /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main