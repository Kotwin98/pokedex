import React from 'react';
import './PokemonCard.css';

const PokemonCard = (props) => {

    return (
        <div className="PokemonCard__container">
            <p>{props.name}</p>
            <img src={props.img} />
        </div>
    );
}

export default PokemonCard;