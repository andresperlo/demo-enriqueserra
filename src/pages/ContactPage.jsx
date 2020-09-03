import React from 'react'
import '../css/ContactPage.css'
function ContactPage() {
    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='ConcepcionOfi'>
                        <h4 className='text-center py-3'>Oficina Central en Concepcion</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.5852330427691!2d-65.59458889355633!3d-27.344125078126858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf682081a851%3A0x9258390fc1683301!2sEmpresa%20Enrique%20Serra!5e0!3m2!1ses!2sar!4v1599145559742!5m2!1ses!2sar" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <div className='OficinaConcepcionCss pt-4'>
                            <div className='d-flex'>
                                <i className="fas fa-map-marker-alt"></i>
                                <div className='ml-3'>
                                    <h6>Direccion</h6>
                                    <h5>24 de Septiembre 1621</h5>
                                </div>
                            </div>
                            <div className='d-flex Colectivocss'>
                                <i className="fas fa-info-circle"></i>
                                <div className='ml-3'>
                                    <h6>Colectivos</h6>
                                    <h5>101-5-9-11-17</h5>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <i className="fas fa-phone-volume"></i>
                                <div className='ml-3'>
                                    <h6>Telefono</h6>
                                    <h5>3865 000 000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='FormCss my-5'>
                <div className='col-12 col-md-4 col-lg-4'>
                    <h3>Escribe un Mensaje</h3>
                    <p>Si tiene alguna pregunta, por favor no dude en enviarnos un mensaje. 
                        Nosotros le responderemos dentro de las prox 24 horas! Muchas Gracias</p>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Nombre y Apellido</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Telefono</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Direccion de Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Mensaje</label>
                            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Enviar Formulario</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage