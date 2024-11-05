
import React, { useState } from 'react';

function Formulario({ onSubmit }) {
  const [pokemon, setPokemon] = useState({ name: '', imageUrl: '' });

  const handleChange = (e) => {
    setPokemon({ ...pokemon, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pokemon);
    setPokemon({ name: '', imageUrl: '' });
  };

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <input name="name" value={pokemon.name} onChange={handleChange} placeholder="Nombre del Pokémon" required />
      <input name="imageUrl" value={pokemon.imageUrl} onChange={handleChange} placeholder="URL de la imagen" required />
      <button type="submit">Añadir Pokémon</button>
    </form>
  );
}

export default Formulario;
