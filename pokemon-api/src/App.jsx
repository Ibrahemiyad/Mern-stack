import React, { useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(err => console.error('Error fetching Pokémon:', err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1> Pokémon Fetcher</h1>
      <button onClick={fetchPokemons} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Fetch All 807 Pokémon
      </button>

      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
