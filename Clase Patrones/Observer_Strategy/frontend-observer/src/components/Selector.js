import React, { useState, useEffect } from 'react';
import Observable from './observable';

const selectionObservable = new Observable();

function Selector() {
    const [selection, setSelection] = useState('Abogado');

    useEffect(() => {
        selectionObservable.notify(selection);
    }, [selection]);

    const handleChange = (e) => {
        setSelection(e.target.value);
    };

    return (
        <div>
            <label>Seleccione un tipo de usuario:</label>
            <select value={selection} onChange={handleChange}>
                <option value="Abogado">Abogado</option>
                <option value="Asistente">Asistente</option>
            </select>
        </div>
    );
}

export { selectionObservable };
export default Selector;
