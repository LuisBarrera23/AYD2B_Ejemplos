import React, { useState, useEffect } from 'react';
import { selectionObservable } from './Selector';
import AbogadoForm from './AbogadoForm';
import AsistenteForm from './AsistenteForm';

function FormObserver() {
    const [formType, setFormType] = useState('Abogado');

    useEffect(() => {
        const updateFormType = (selection) => {
            setFormType(selection);
        };

        selectionObservable.subscribe(updateFormType);

        return () => {
            selectionObservable.unsubscribe(updateFormType);
        };
    }, []);

    return (
        <div>
            {formType === 'Abogado' && <AbogadoForm />}
            {formType === 'Asistente' && <AsistenteForm />}
        </div>
    );
}

export default FormObserver;
