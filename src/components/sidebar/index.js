import axios from 'axios';
import { memo, useEffect, useState } from 'react';

import './styles.css';
import SidebarItem from '../sidebarItem';

const Sidebar = () => {
  const [pokemon, setPokemon] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axios('https://pokeapi.co/api/v2/pokemon/2');
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='sidebar'>
      {pokemon && (
        <>
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
          <SidebarItem {...pokemon} />
        </>
      )}
    </div>
  );
};

export default memo(Sidebar);
