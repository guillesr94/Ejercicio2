import React from 'react';
import ComponenteContacto from '../pure/forms/ComponenteContacto';
import { Contacto } from '../pure/forms/Contacto';







const ComponenteMotrar = () => {

    
    const contacto = new Contacto("Anto","Antonena",false,"anto@blalbabl.com")
    const incorrecto = ["pepe","Luis",false]
    return (
        <div>
            <ComponenteContacto contacto = {contacto} />
        </div>
    );
};





export default ComponenteMotrar;
