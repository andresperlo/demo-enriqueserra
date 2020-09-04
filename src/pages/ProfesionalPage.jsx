import React from 'react'
import '../css/PlanOroPage.css'
import doctora from '../img/doctora.jfif'

function ProfesionalPage() {
    return (
        <>
            <div>
                <h3 className='text-center py-3'>Caracteristicas del Plan</h3>
            </div>
            <div className='container'>
                <div className='divEsPresentacion'>
                    <img src={doctora} className='img-portada' alt="" />
                    <div className=' pl-3 pt-3'>
                        <ul>
                            <li>Nombre del Profesional:</li>
                            <p>RODRIGUEZ LEON SILVIA ELENA</p>
                            <li>Dia y Horario en los que Atiende:</li>
                            <p>JUEVES 17 A 20 HS</p>
                            <li>Direccion:</li>
                            <p>ITALIA 1585</p>
                            <li>Telefono para consultar disponiblidad:</li>
                            <p>428149</p>
                            <h6>Para Sacar la Orden haga click en el siguiente boton y llame al numero de la oficina que corresponda a su localidad</h6>
                            <a href='/contacto' className='btn btn-primary mt-3' target='_blank'>Ver Oficina</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfesionalPage