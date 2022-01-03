import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonList from './components/Pages/PokemonList/PokemonList';
import PokemonDescription from './components/Pages/PokemonDescription/PokemonDescription';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:pokemon" exact component={PokemonDescription} />
      </Switch>
    </Router>
  );
}

export default App;
