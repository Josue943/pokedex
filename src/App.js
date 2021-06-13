import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPokedex, getPokemon } from './store/entities/home/actions';
import Main from './components/main';
import Sidebar from './components/sidebar';

function App({ getPokemon, fetchPokedex, page }) {
  useEffect(() => {
    fetchPokedex(page);
    getPokemon(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className='container'>
      <Sidebar />
      <Main />
    </div>
  );
}

const mapStateToProps = ({ home: { page } }) => ({ page });

export default connect(mapStateToProps, { getPokemon, fetchPokedex })(App);
