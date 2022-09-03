import React from "react";
import '../styles/Pokedex.css'
import Pokemon from "./Pokemon";


const Pokedex = (props) => {
    const { pokemon, loading } = props
    return (
        <div className="pokedex-container">
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemon && pokemon.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex