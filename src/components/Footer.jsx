import React from 'react'

function Footer() {
    return (
        <footer className='mt-3 py-3 class-nav text-white Class-Footer'>
            <div>
                <h4>Enrique Serra</h4>
            </div>
            <div className='text-center'>
                <h4>Seguinos en las Redes</h4>
                <div className='redes-sociales'>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram mx-3"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-whatsapp ml-3"></i>
                </div>
            </div>
            <div className='text-center'>
                <h4>Nuestra Oficina en San Miguel</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d558.4607873287847!2d-65.21218290752056!3d-26.828122148946512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c14840db2f3%3A0x9455db676b96ebb7!2sGral.%20Jos%C3%A9%20de%20San%20Mart%C3%ADn%20999%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1599083469132!5m2!1ses-419!2sar" width="300" height="250" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </footer>
    )
}

export default Footer