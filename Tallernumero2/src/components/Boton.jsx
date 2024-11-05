import React from 'react';
import { Link } from 'react-router-dom';

function Boton({ text, link }) {
    return (
        <Link to={link}>
        <button>{text}</button>
        </Link>
    );
}

export default Boton;
