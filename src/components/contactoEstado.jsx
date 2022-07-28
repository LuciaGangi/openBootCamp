import React, { Component } from 'react';
import { Contacto } from '../models/contact.class';
import ContactoComponent from './contacto';


const ContactState = () => {
    const defaultProps = new Contacto('Lucía', 'Gangi', 'lucia@gmail.com', false);

    const changeState = (id) => {}

    return (
        <div>
            <div>
                <h1>Tus Contactos:</h1>
            </div>
            <ContactoComponent props={defaultProps}></ContactoComponent>
        </div>
    );

};

export default ContactState;