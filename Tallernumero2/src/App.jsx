import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddPokemon from './pages/AddPokemon';
import Pokemon from './pages/Pokemon';
import Navbar from './components/Navbar';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const addPokemon = (newPokemon) => {
    setPokemonList([newPokemon, ...pokemonList]);
  };

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon pokemonList={pokemonList} />} />
          <Route path="/addPokemon" element={<AddPokemon addPokemon={addPokemon} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

