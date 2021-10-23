import React from 'react';
import { Link } from 'react-router-dom';
import { getTypeColor } from '../../../actions/getTypeColor/getTypeColor';

const PokemonDescription = (props) => {
  console.log(props.location.pokemonProps.stats);
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>{props.location.pokemonProps.name}</h1>
      <img src={props.location.pokemonProps.img} alt="pokemon" />
      <div>
          {props.location.pokemonProps.type.map(type => (
              <p style={{ backgroundColor: getTypeColor(type.type.name) }}>{type.type.name}</p>
          ))}
      </div>
      <div>
        <p>{props.location.pokemonProps.height}</p>
        <p>{props.location.pokemonProps.weight}</p>
      </div>
      {props.location.pokemonProps.stats.map(stat => (
        <div>
          <p>{stat.stat.name}</p>
          <p>{stat.base_stat}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonDescription;