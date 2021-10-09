import React, { useState, useEffect } from 'react';
import { getPokemon } from './actions/getPokemon/getPokemon-action';
import { getAllPokemon } from './actions/getAllPokemon/getAllPokemon-action';
import PokemonCard from './components/PokemonCard/PokemonCard';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const api = 'https://pokeapi.co/api/v2/pokemon';
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(api);
      setPrevPage(response.previous);
      setNextPage(response.next);
      await loadPokemon(response.results);
      console.log(response);
    }
    fetchData();
  }, [])

  const loadPrevious = async () => {
    if (!prevPage) return;
    let data = await getAllPokemon(prevPage);
    await loadPokemon(data.results);
    setPrevPage(data.previous);
    setNextPage(data.next);
  }

  const loadNext = async () => {
    let data = await getAllPokemon(nextPage);
    await loadPokemon(data.results);
    setPrevPage(data.previous);
    setNextPage(data.next);
  }

  const loadPokemon = async (data) => {
    // Promise.all waits for all promises to be resolved, or for any to be rejected
    // Maps all pokemons into separate objects
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon)
      return pokemonGet
    }))
    // Puts all pokemon objects into an array
    setPokemonData(_pokemonData);
    // console.log(_pokemonData);
  }

  return (
    <div className="App">
      {pokemonData.map((pokemon) => (
        <PokemonCard 
          key={pokemon.name} 
          name={pokemon.name}
          img={pokemon.sprites.front_default}
        />
      ))}
      <button onClick={loadPrevious}>Previous</button>
      <button onClick={loadNext}>Next</button>
    </div>
  );
}

export default App;
