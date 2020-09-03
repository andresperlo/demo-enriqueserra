import React from 'react'
import '../css/BusinessPage.css'
import logo from '../img/logo.jfif'

function BusinessPage() {
    return (
        <div className='container pt-3'>
            <div>
                <h4>La Empresa</h4>
            </div>
            <div className='pt-3'>
                <p>Somos una empresa tucumana dedicada a brindar servicios exequiales desde hace más de ochenta años. Enrique Serra basa su filosofía en el respeto, la comprensión y una inmensa vocación de servicio.</p>
                <p>Nos propusimos crecer acompañando la evolución de los cambios culturales y ser la empresa líder en innovación, con un solo objetivo: brindar más y mejores servicios a los tucumanos, con el mayor de los respetos y consideraciones por los delicados momentos en que solicitan nuestros servicios.</p>
                <p>Todas nuestras prestaciones están orientadas a solucionar problemas en momentos críticos en la vida de las personas, y fueron desarrolladas principalmente para cubrir las necesidades de estas circunstancias y adaptarse a las distintas culturas y religiones de nuestro país.</p>
            </div>
            <div>
                <h4>Profesionales Capacitados</h4>
            </div>
            <div className='pt-3'>
                <p>Elegimos a nuestros colaboradores principalmente por su condición humana: su capacidad de brindar contención, compromiso, respeto y profesionalismo.</p>
                <p>Contamos con un personal altamente comprometido en la compleja organización de los servicios exequiales. Nuestros recursos humanos están fuertemente involucrados con nuestra cultura organizacional y para ellos, es un valor significativo.</p>
                <p>La continua capacitación que reciben, sumada a la gran experiencia acumulada a lo largo de ocho décadas, se conjuga en un grupo humano que está preparado para realizar su tarea cuidando cada detalle.</p>
            </div>
            <div className='d-flex justify-content-center'>
                <img src={logo} className='img-logo' alt=""/>
            </div>
        </div>
    )
}

export default BusinessPage