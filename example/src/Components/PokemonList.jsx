import React, { useEffect, useState } from 'react';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then(response => response.json())
            .then(data => setPokemons(data.results))
            .catch(err => console.error("Error fetching Pokémon:", err));
    }, []);

    return (
        <div>
            <h2>Pokémon List</h2>
            <ul>
                {pokemons.map((pokemon, idx) => (
                    <li key={idx}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}
