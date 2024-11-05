import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddPokemon from './pages/AddPokemon';
import Pokemon from './pages/Pokemon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content"> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/addPokemon" component={AddPokemon} />
            <Route path="/pokemon" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

