import React, { useState, useEffect } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getTypeColor } from '../../../actions/getTypeColor/getTypeColor';

const PokemonDescription = ({ location: {pokemonProps: { id, name, img, type, height, weight, stats }} }) => {
  const [firstEvolution, setFirstEvolution] = useState();
  const [secondEvolution, setSecondEvolution] = useState();
  const api = `https://pokeapi.co/api/v2/evolution-chain/${id}`

  useEffect(() => {
    axios.get(api)
      .then(function (response) {
        setFirstEvolution(response.data.chain.evolves_to[0].species.name);
        setSecondEvolution(response.data.chain.evolves_to[0].evolves_to[0].species.name);
        // console.log(response.data.chain.evolves_to[0].species.name);
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
  });

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
      <div>
        <p>{name} - {firstEvolution} - {secondEvolution}</p>
      </div>
    </div>
  );
}

export default PokemonDescription;