import React from 'react'
import '../css/PlanOroPage.css'
import portadaPlata from '../img/PortadaPlata.jfif'

function PlanPlataPage() {
    return (
        <>
            <div>
                <h3 className='text-center py-3'>Caracteristicas del Plan</h3>
            </div>
            <div className='container'>
                <div className='divEsPresentacion'>
                    <img src={portadaPlata} className='img-portada' alt="" />
                    <div className=' pl-3 pt-3'>
                        <ul>
                            <li>ATAÚD</li>
                            <p>Bóveda dos panales para tierra o monumento, hasta medida standard, blondas y contrablondas volcablesy placa identificatoria</p>
                            <li>SALAS VELATORIAS</li>
                            <p>Climatizadas, servicio de catering, con infraestructura propia de primer nivel</p>
                            <li>CAPILLA ARDIENTE</li>
                            <p>En domicilio, electrica, gas o velas naturales</p>
                            <li>TRASLADO DE RESTOS</li>
                            <p>A nivel nacional sin cargo, desde el lugar del fallecimiento al velatorio, en furgon sanitario</p>
                            <li>CORTEJO FUNEBRE</li>
                            <p>Hasta 30 km del lugar del velatorio. Carroza fúnebre, dos autos de acompañante para los dolientes y una carroza porta-coronas en caso de ser necesario</p>
                            <li>AVISO DE INVITACIÓN  AL SEPELIO</li>
                            <p>Publicación del aviso en el diario local (o de mayor tirada)</p>
                            <li>PARCELA EN CEMENTERIO PARQUE</li>
                            <p>Subconcesión en cementerios Parque que tenga convenio con la Empresa</p>
                            <li>GASTO DE INHUMACIÓN</li>
                            <p>Incluye: conducción, excavación, sellado</p>
                            <li>SERVICIO DE CREMACIÓN</li>
                            <p>Como opcion a la inhumación</p>
                            <li>TRÁMITES NECESARIOS EN EL REGISTRO CIVIL</li>
                            <p>Si el siniestro se produjera en las localidades donde la Empresa posee sucursal</p>
                            <li>AYUDA DE DUELO</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanPlataPage