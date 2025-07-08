import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokémon:', error);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎮 Pokémon Name List (Axios)</h1>
      <button 
        onClick={fetchPokemons}
        style={{ padding: '10px 20px', marginBottom: '20px', fontSize: '16px' }}
      >
        Fetch 807 Pokémon
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
