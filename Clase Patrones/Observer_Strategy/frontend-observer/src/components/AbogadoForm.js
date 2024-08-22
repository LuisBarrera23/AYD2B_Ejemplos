import React from 'react';

function AbogadoForm() {
    return (
        <form>
            <div>
                <label>Nombre Abogado:</label>
                <input type="text" name="nombre" />
            </div>
            <div>
                <label>Correo Abogado:</label>
                <input type="email" name="correo" />
            </div>
            <div>
                <label>Contraseña Abogado:</label>
                <input type="password" name="contrasenia" />
            </div>
            {/* Campos específicos para Abogado */}
        </form>
    );
}

export default AbogadoForm;
