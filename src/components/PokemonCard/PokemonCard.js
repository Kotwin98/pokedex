import React from 'react';
import { Link } from 'react-router-dom';
import { getTypeColor } from '../../actions/getTypeColor/getTypeColor';
import './PokemonCard.css';

const PokemonCard = (props) => {
    return (
        <div className="PokemonCard__container">
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
                <div className="PokemonCard__img-container">
                    <img src={props.img} className="PokemonCard__img" alt="pokemon" />
                </div>
            </Link>
            <p className="PokemonCard__index">#{props.id}</p>
            <p className="PokemonCard__name">{props.name}</p>
            <div className="PokemonCard__type-container">
                {props.type.map(type => (
                    <span className="PokemonCard__type" style={{ backgroundColor: getTypeColor(type.type.name) }}>{type.type.name}</span>
                ))}
            </div>
        </div>
    );
}

export default PokemonCard;