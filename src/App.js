import React, { useState, useEffect } from 'react';
import { getPokemon } from './actions/getPokemon/getPokemon-action';
import { getAllPokemon } from './actions/getAllPokemon/getAllPokemon-action';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const api = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(api);
      await loadPokemon(response.results);
      console.log(response);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    // Promise.all waits for all promises to be resolved, or for any to be rejected
    // Maps all pokemons into separate objects
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon)
      // console.log(pokemonGet)
      return pokemonGet
    }))
    // Puts all pokemon objects into an array
    setPokemonData(_pokemonData)
    // console.log(_pokemonData)
  }

  return (
    <div className="App">
      {pokemonData.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
}

export default App;
