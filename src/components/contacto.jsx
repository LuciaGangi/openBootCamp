import React from 'react';
import PropTypes from 'prop-types'
import { Contacto } from '../models/contact.class';



const ContactoComponent = ({ props }) => {
    return (
        <div>
            <h2>
            Nombre: { props.name }
            </h2>
            <h3>
            Apellido: { props.lastname }
            </h3>
            <h4>
            Email: { props.email }
            </h4>
            <h5>
            El contacto está: { props.connected ? 'Contacto En Línea' : 'Contacto No Disponible' }
            </h5>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoComponent;