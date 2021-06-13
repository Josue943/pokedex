import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPokedex } from './store/entities/home/actions';
import Main from './components/main';
import Sidebar from './components/sidebar';

function App({ fetchPokedex, page }) {
  useEffect(() => {
    fetchPokedex(page);
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

export default connect(mapStateToProps, { fetchPokedex })(App);
