import React from 'react'
import '../css/ContactPage.css'
function ContactPage() {
    return (
        <>
            <div className='container-fluid'>
                <div className='d-flex justify-content-center'>
                    <div className='ConcepcionOfi'>
                        <h4 className='text-center py-3'>Oficina Central en Concepcion</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.5852330427691!2d-65.59458889355633!3d-27.344125078126858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf682081a851%3A0x9258390fc1683301!2sEmpresa%20Enrique%20Serra!5e0!3m2!1ses!2sar!4v1599145559742!5m2!1ses!2sar" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className='border border-dark'></iframe>
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
                                    <h6>Telefonos</h6>
                                    <h5>03865 422 684</h5>
                                    <h5>03865 422 273</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <h3>Sucursales</h3>
                </div>
                <div className='SucursalesCss'>
                    <div>
                        <h5 className='text-center'>San Miguel de Tucuman</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d445.04876245861215!2d-65.21128881216431!3d-26.827542057630364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc899034ddc3540fb!2sEmpresa%20Enrique%20Serra!5e0!3m2!1ses!2sar!4v1599164531175!5m2!1ses!2sar" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className='border border-dark'></iframe>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-map-marker-alt"></i>
                            <h6 className='ml-2'>San Martin 999</h6>
                        </div>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-phone-volume"></i>
                            <h6 className='ml-2'>0381 431 0756 / </h6>
                            <h6 className='ml-2'>0381 431 0947</h6>
                        </div>
                    </div>
                    <div className='SucursalAlberdicss'>
                        <h5 className='text-center'>J.B Alberdi</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.62826337521903!2d-65.61623760660041!3d-27.588479156213637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423e902451d8f61%3A0x763541850a3dd87d!2sEmpresa%20Enrique%20Serra!5e0!3m2!1ses!2sar!4v1599187277681!5m2!1ses!2sar" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className='border border-dark'></iframe>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-map-marker-alt"></i>
                            <h6 className='ml-2'>San Martin 999</h6>
                        </div>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-phone-volume"></i>
                            <h6 className='ml-2'>03865 471 099</h6>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-center'>Aguilares</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d566.9524303196043!2d-65.61491570293968!3d-27.42932278470274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423c5ab69b9beb3%3A0x258069764b8fdc30!2sEmpresa%20Serra!5e0!3m2!1ses!2sar!4v1599187482376!5m2!1ses!2sar" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className='border border-dark'></iframe>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-map-marker-alt"></i>
                            <h6 className='ml-2'>C. Pellegrini 642</h6>
                        </div>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-phone-volume"></i>
                            <h6 className='ml-2'>03865 481 129</h6>
                        </div>
                    </div>
                    <div className='SucursalLaCochacss'>
                        <h5 className='text-center'>La Cocha</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.683953978351!2d-65.58697312162099!3d-27.764541952552154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423f16e5ce4a60d%3A0xb7ec71d31db2d789!2sSan%20Mart%C3%ADn%20Norte%2C%20La%20Cocha%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1599187683390!5m2!1ses!2sar"  frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" className='border border-dark'></iframe>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-map-marker-alt"></i>
                            <h6 className='ml-2'>San Martin 61</h6>
                        </div>
                        <div className='d-flex ml-3'>
                            <i className="fas fa-phone-volume"></i>
                            <h6 className='ml-2'>03865 496 124</h6>
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