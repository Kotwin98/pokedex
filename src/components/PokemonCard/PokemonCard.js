import React from 'react';
import { Link } from 'react-router-dom';
import { getTypeColor } from '../../actions/getTypeColor/getTypeColor';
import './PokemonCard.css';

const PokemonCard = (props) => {
    return (
        <div className="PokemonCard__container">
            <p>{props.name}</p>
            <Link to={{
                pathname:`/pokemon/${props.id}`,
                pokemonProps: {
                    id: props.id,
                    name: props.name,
                    img: props.img,
                    type: props.type,
                    height: props.height,
                    weight: props.weight,
                    stats: props.stats
                }
            }}>
                <img src={props.img} alt="pokemon" />
            </Link>
            <div>
                {props.type.map(type => (
                    <p style={{ backgroundColor: getTypeColor(type.type.name) }}>{type.type.name}</p>
                ))}
            </div>
        </div>
    );
}

export default PokemonCard;