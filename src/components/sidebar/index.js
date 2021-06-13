import { connect } from 'react-redux';
import { memo, useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css';
import { fetchPokedex } from '../../store/entities/home/actions';
import PokedexItem from '../pokedexItem';

const Sidebar = ({ currentPage, pages, pokedex, selectedPokemon, fetchPokedex }) => {
  const query = new URLSearchParams(useLocation().search).get('query');

  const [element, setElement] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && currentPage > pages) fetchPokedex(true);
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

  useEffect(() => {
    fetchPokedex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const elementRef = index => (index === currentPage * 25 - 5 ? true : false);

  return (
    <div className='sidebar'>
      {pokedex.map((pokemon, index) => (
        <PokedexItem {...pokemon} selected={selectedPokemon === pokemon._id} {...(elementRef(index + 1) && { ref: setElement })} key={pokemon._id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ home: { currentPage, pokedex, pages, selectedPokemon } }) => ({ pokedex, currentPage, selectedPokemon, pages });

export default connect(mapStateToProps, { fetchPokedex })(memo(Sidebar));
