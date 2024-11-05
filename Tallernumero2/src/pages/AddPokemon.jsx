// src/pages/AddPokemon.js
import React from 'react';
import Formulario from '../components/Formulario';

function AddPokemon({ addPokemon }) {
    return (
        <div>
            <h1>Añadir Pokémon</h1>
            <Formulario onSubmit={addPokemon} />
        </div>
        );
    }

export default AddPokemon;
