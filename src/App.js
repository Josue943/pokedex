import axios from 'axios';
import { useEffect, useState } from 'react';

import Main from './components/main';
import Sidebar from './components/sidebar';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axios('https://pokeapi.co/api/v2/pokemon/6');
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'>
      {pokemon && (
        <>
          <Sidebar pokemon={pokemon} />
          <Main {...pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
