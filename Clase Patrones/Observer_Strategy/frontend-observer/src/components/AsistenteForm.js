import React from 'react';

function AsistenteForm() {
    return (
        <form>
            <div>
                <label>Nombre Asistente:</label>
                <input type="text" name="nombre" />
            </div>
            <div>
                <label>Correo Asistente:</label>
                <input type="email" name="correo" />
            </div>
            <div>
                <label>Contraseña Asistente:</label>
                <input type="password" name="contrasenia" />
            </div>
            {/* Campos específicos para Asistente */}
        </form>
    );
}

export default AsistenteForm;
