import React from 'react';
import "./pokemonCard.css"
const PokemonCard = (props) => {
    return (
        <div className='card'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png`}/>
            <p>{props.name}</p>
        </div>
    );
};

export default PokemonCard;