import React, { useState, useEffect } from 'react';
import { getPokemon } from '../../../actions/getPokemon/getPokemon-action';
import { getAllPokemon } from '../../../actions/getAllPokemon/getAllPokemon-action';
import PokemonCard from '../../PokemonCard/PokemonCard';
import Spinner from '../../Spinner/Spinner';
import './PokemonList.css';

const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const api = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
          let response = await getAllPokemon(api);
          setPrevPage(response.previous);
          setNextPage(response.next);
          await loadPokemon(response.results);
          setIsLoading(false);
        //   console.log(response);
        }
        fetchData();
    }, [])
    
    const loadPrevious = async () => {
        if (!prevPage) return;
        setIsLoading(true);
        let data = await getAllPokemon(prevPage);
        await loadPokemon(data.results);
        setPrevPage(data.previous);
        setNextPage(data.next);
        setIsLoading(false);
    }
    
    const loadNext = async () => {
        setIsLoading(true);
        let data = await getAllPokemon(nextPage);
        await loadPokemon(data.results);
        setPrevPage(data.previous);
        setNextPage(data.next);
        setIsLoading(false);
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
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <div className="pokemon__list-container">
                        {pokemonData.map((pokemon) => (
                            <PokemonCard 
                                key={pokemon.name} 
                                id={pokemon.id}
                                name={pokemon.name}
                                img={pokemon.sprites.front_default}
                                type={pokemon.types}
                                height={pokemon.height}
                                weight={pokemon.weight}
                                stats={pokemon.stats}
                            />
                        ))}
                    </div>
                    <div className="pokemon__list-button-container">
                        <button className="pokemon__list-button" onClick={loadPrevious}>Previous</button>
                        <button className="pokemon__list-button" onClick={loadNext}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default PokemonList;