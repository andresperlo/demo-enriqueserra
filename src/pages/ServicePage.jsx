import React from 'react'
import '../css/ServicePage.css'
import banner from '../img/banner2.png'
import oficinaServicio from '../img/oficina.jfif'

function ServicePage() {
    return (
        <>
            <div>
                <img src={banner} className='img-fluid w-100' alt="" />
            </div>
            <div className='py-3 pl-3'>
                <h2>Servicios</h2>
            </div>
            <div className='ServiciosImgyUl'>
                <div className='UlLiServicios'>
                    <ul>
                        <li>Atención personalizada las 24 Hs. los 365 días del año.
                        Para su mayor comodidad podrá solicitar un asesor que se dirija a su domicilio
                           o lugar de encuentro (clínica, hospital, sanatorio, geriátrico, etc.)</li>
                        <li>Sepelios acorde a su necesidad.</li>
                        <li>Cremaciones: municipal o privado.</li>
                        <li>Traslados al interior y exterior del país.</li>
                        <li>Gestión de trámites.</li>
                        <li>Venta de parcelas en cementerios privados</li>
                        <li>Inhumaciones en tierra, nichos, bóvedas y cementerios parque.</li>
                        <li>Velatorios: salas en Capital Federal y Gran Buenos Aires.</li>
                        <li>Flota automotor moderna, confortable y con personal altamente capacitado.</li>
                        <li>Tanatopraxía y tanatoestética.</li>
                        <li>Atención a colectividades.</li>
                        <li>Repatriación.</li>
                        <li>Traslados de cenizas.</li>
                        <li>Ofrendas florales.</li>
                        <li>Estacionamiento propio.</li>
                    </ul>
                </div>
                <div className='img-OficinaServ d-sm-block d-md-none d-lg-block'>
                    <img src={oficinaServicio} alt="" />
                </div>
            </div>
        </>
    )
}

export default ServicePage