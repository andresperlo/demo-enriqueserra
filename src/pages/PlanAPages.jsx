import React from 'react'
import '../css/PlanOroPage.css'
import portadaA from '../img/PortadaA.jfif'

function PlanAPage() {
    return (
        <>
            <div>
                <h3 className='text-center py-3'>Caracteristicas del Plan</h3>
            </div>
            <div className='container'>
                <div className='divEsPresentacion'>
                    <img src={portadaA} className='img-portada' alt="" />
                    <div className=' pl-3 pt-3'>
                        <ul>
                            <li>ATAÚD</li>
                            <p>Consta de Ataúd Boveda 2 paneles para tierra o munumento, con caja interior metalica, hasta medida standard, con blondas, contrablondas volcables, valvula para formol y placa identificatoria grabada</p>
                            <li>SALAS VELATORIAS O CAPILLA ARDIENTE</li>
                            <p>En domicilio, electrica, gas o velas naturales. Manto Cortinado y Alfombra o sala velatoria</p>
                            <li>TRASLADO DE RESTOS</li>
                            <p>A nivel provincial sin cargo, desde el lugar del fallecimiento al velatorio, en furgon sanitario</p>
                            <li>CORTEJO FUNEBRE</li>
                            <p>Hasta 30 km del lugar del velatorio. Carroza fúnebre y dos autos de acompañante para los dolientes</p>
                            <li>AVISO DE INVITACIÓN  AL SEPELIO</li>
                            <p>Publicación del aviso en el diario local (o de mayor tirada)</p>
                            <li>PARCELA EN CEMENTERIO PARQUE</li>
                            <p>Subconcesión en cementerios Parque que tenga convenio con la Empresa</p>
                            <li>TRÁMITES NECESARIOS EN EL REGISTRO CIVIL</li>
                            <p>Si el siniestro se produjera en las localidades donde la Empresa posee sucursal</p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanAPage