// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Boton from './Boton';

const Navbar = () => {
  return (

    <nav className='navbar'>
      <Boton text="Inicio" link="/" />
      <Boton text="Lista de Pokémons" link="/pokemon" />
      <Boton text="Añadir Pokémon" link="/addPokemon" />
    </nav>
  );
};

export default Navbar;