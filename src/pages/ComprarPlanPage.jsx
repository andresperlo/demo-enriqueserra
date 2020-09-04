import React from 'react'
import '../css/ComprarPlanPage.css'

function ComprarPlanPage() {
    return (
        <div className='container col-md-6 col-lg-6 pt-3'>
            <form class="needs-validation border border-dark p-3" novalidate>
                <div>
                    <h2 className='text-center h2FormCompra'>Formulario de Compra</h2>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom01">Nombre y Apellido</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="Marc Anthony" required />
                        <div class="valid-feedback">
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom02">Fecha de Nacimiento</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="dd/mm/aaaa" required />
                        <div class="valid-feedback">
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom01">N° de Documento</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="ej: 12345678" required />
                        <div class="valid-feedback">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom03">Localidad</label>
                        <input type="text" class="form-control" placeholder='Ej: Las Talitas' id="validationCustom03" required />
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom03">N° Telefonico</label>
                        <input type="text" class="form-control" placeholder='EJ: 123 456 789' id="validationCustom03" required />
                        <div class="invalid-feedback">
                        </div>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="validationCustom04">Servicio a Adquirir</label>
                        <select class="custom-select" id="validationCustom04" required>
                            <option selected disabled value="">Elegir Servicio...</option>
                            <option>Plan Oro</option>
                            <option>Plan Plata</option>
                            <option>Plan A</option>
                            <option>Plan Asist</option>
                            <option>Adquirir Parcela</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button class="btn btn-primary BotonForm" type="submit">Enviar Formulario</button>
                </div>
            </form >
        </div>

    )
}

export default ComprarPlanPage
