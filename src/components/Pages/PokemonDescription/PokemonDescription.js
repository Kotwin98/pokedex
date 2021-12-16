import React from 'react';
import { Link } from 'react-router-dom';
import { getTypeColor } from '../../../actions/getTypeColor/getTypeColor';

const PokemonDescription = ({ location: {pokemonProps: { name, img, type, height, weight, stats }} }) => {
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>{name}</h1>
      <img src={img} alt="pokemon" />
      <div>
          {type.map(type => (
              <p style={{ backgroundColor: getTypeColor(type.type.name) }}>{type.type.name}</p>
          ))}
      </div>
      <div>
        <p>{height}</p>
        <p>{weight}</p>
      </div>
      {stats.map(stat => (
        <div>
          <p>{stat.stat.name}</p>
          <p>{stat.base_stat}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonDescription;