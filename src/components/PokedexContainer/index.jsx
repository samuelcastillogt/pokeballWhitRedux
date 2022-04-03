import React from 'react';
import "./pokedexContainer.css"
const PokedexContainer = ({children}) => {
    return (
        <div className='pokedex-container'>
            {children}
        </div>
    );
};

export default PokedexContainer;