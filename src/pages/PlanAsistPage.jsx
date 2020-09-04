import React from 'react'
import '../css/PlanOroPage.css'
import planAsist from '../img/PlanAsist.jpeg'

function PlanAsistPage() {
    return (
        <>
            <div>
                <h3 className='text-center py-3'>Caracteristicas del Plan</h3>
            </div>
            <div className='container'>
                <div className='divEsPresentacion'>
                    <img src={planAsist} className='img-portada' alt="" />
                    <div className=' pl-3 pt-3'>
                        <ul>
                            <li>CONSULTAS MEDICAS</li>
                            <p>Todas las especialidades medicas. Amplia Guia de prestadores</p>
                            <li>ENFERMERIA</li>
                            <p>Inyecciones, curaciones, control de presion arterial y nebulizaciones</p>
                            <li>ESTUDIO DE DIAGNOSTICO</li>
                            <p>Analisis Clinicos - Radiografias - Ecografias  Electrocardiogramas - Papanicolau - Mamografias - Etc</p>
                            <li>ESTUDIO DE ALTA COMPLEJIDAD</li>
                            <p>Tomografias - Gammografias - Eco Doppler - Resonancia Magnetica - Nuclear - Centellografia - Etc</p>
                            <li>COBERTURA SANATORIAL PROGRAMADA</li>
                            <p>Internaciones - Cirugias - Practicas Especiales</p>
                            <li>FARMACIA</li>
                            <p>Desc. c/ vademecum todas las farmacias - Desc. s/vademecum FARMACIA PROPIA - Reintegro: recetario solidario y Obras Sociales</p>
                            <li>ODONTOLOGIA</li>
                            <p>Consulta- Limpieza - Extracciones - Lampara en CONSULTORIO PROPIO</p>
                            <li>OPTICAS</li>
                            <p>importantes descuentos en Anteojos Recetados</p>
                            <li>TRASLADOS PROGRAMADOS</li>
                            <p>Traslado de enfermos horizontales imposibilitados de moverse hasta 20 km 3 por mes. Unicamente con prescripcion medica</p>
                            <li>SERVICIOS SOCIALES</li>
                            <p>Ayuda por nacimientos - Ayuda Escolar EGB 1 y 2</p>
                            <li>SERVICIO DE SEPELIO</li>
                            <p>Alta Calidad y Jerarquia - Salas Velatorias - Ataud hasta medida standard</p>
                        </ul>
                        <div className='d-flex justify-content-center'>
                            <a href='/comprarplan' className='btn btn-primary btnPlanCss' target='_blank'>Adquirir Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanAsistPage