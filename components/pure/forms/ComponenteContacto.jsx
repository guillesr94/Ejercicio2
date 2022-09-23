import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './Contacto';



const ComponenteContacto = ( { contacto } ) => {
   console.log(contacto)
    return (
        <div>
            <h1>Nombre: {contacto.nombre}</h1>
            <h3>Apellido: {contacto.apellido}</h3>
            <h4>Mail: {contacto.email}</h4>
            <h3>Conectado: {contacto.conectado?"conectado":"Desconectado"}</h3>
        </div>
    );
};


ComponenteContacto.propTypes = {
    contacto : PropTypes.instanceOf(Contacto)
};


export default ComponenteContacto;

