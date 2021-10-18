import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonList from './components/Pages/PokemonList/PokemonList';
import PokemonDescription from './components/Pages/PokemonDescription/PokemonDescription';
// import { getPokemon } from './actions/getPokemon/getPokemon-action';
// import { getAllPokemon } from './actions/getAllPokemon/getAllPokemon-action';
// import PokemonCard from './components/PokemonCard/PokemonCard';
// import Spinner from './components/Spinner/Spinner';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const api = 'https://pokeapi.co/api/v2/pokemon';

  // useEffect(() => {
  //   async function fetchData() {
  //     let response = await getAllPokemon(api);
  //     setPrevPage(response.previous);
  //     setNextPage(response.next);
  //     await loadPokemon(response.results);
  //     setIsLoading(false);
  //     console.log(response);
  //   }
  //   fetchData();
  // }, [])

  // const loadPrevious = async () => {
  //   if (!prevPage) return;
  //   setIsLoading(true);
  //   let data = await getAllPokemon(prevPage);
  //   await loadPokemon(data.results);
  //   setPrevPage(data.previous);
  //   setNextPage(data.next);
  //   setIsLoading(false);
  // }

  // const loadNext = async () => {
  //   setIsLoading(true);
  //   let data = await getAllPokemon(nextPage);
  //   await loadPokemon(data.results);
  //   setPrevPage(data.previous);
  //   setNextPage(data.next);
  //   setIsLoading(false);
  // }

  // const loadPokemon = async (data) => {
    // Promise.all waits for all promises to be resolved, or for any to be rejected
    // Maps all pokemons into separate objects
    // let _pokemonData = await Promise.all(data.map(async pokemon => {
    //   let pokemonGet = await getPokemon(pokemon)
    //   return pokemonGet
    // }))
    // Puts all pokemon objects into an array
    // setPokemonData(_pokemonData);
    // console.log(_pokemonData);
  // }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:pokemon" exact component={PokemonDescription} />
      </Switch>
    </Router>
    // <div className="App">
    //   {isLoading ? (
    //     <Spinner />
    //   ) : (
    //     <div className="pokemon__list-container">
    //       {pokemonData.map((pokemon) => (
    //         <PokemonCard 
    //           key={pokemon.name} 
    //           name={pokemon.name}
    //           img={pokemon.sprites.front_default}
    //           type={pokemon.types}
    //         />
    //       ))}
    //     </div>
    //   )}
    //   <button onClick={loadPrevious}>Previous</button>
    //   <button onClick={loadNext}>Next</button>
    // </div>
  );
}

export default App;
