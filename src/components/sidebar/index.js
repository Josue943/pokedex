import { connect } from 'react-redux';
import { memo, useRef, useEffect, useState } from 'react';

import './styles.css';
import { changePage } from '../../store/entities/home/actions';
import SidebarItem from '../sidebarItem';

const Sidebar = ({ changePage, page, pokedex, selectedPokemon }) => {
  const [element, setElement] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) changePage();
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currentObserver = observer.current;
    if (element) currentObserver.observe(element);
    return () => {
      if (element) currentObserver.unobserve(element);
    };
  }, [element]);

  const loadMorePokemons = index => (index === page * 25 - 5 ? true : false);
  console.log(selectedPokemon);
  return (
    <div className='sidebar'>
      {pokedex.map((pokemon, index) => (
        <SidebarItem {...pokemon} selected={selectedPokemon === pokemon.id} {...(loadMorePokemons(index + 1) && { ref: setElement })} key={pokemon.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ home: { pokedex, page, selectedPokemon } }) => ({ pokedex, page, selectedPokemon });

export default connect(mapStateToProps, { changePage })(memo(Sidebar));
