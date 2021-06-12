import { connect } from 'react-redux';
import { memo, useCallback } from 'react';

import './styles.css';
import Icon from '../../assets/icon_search.svg';
import { toggleInput, setQuery } from '../../store/entities/home/actions';

const SearchBox = ({ inputActive, query, toggleInput, setQuery }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(({ target }) => setQuery(target.value), []);
  return (
    <form className='form-group'>
      {inputActive && <input autoFocus name='query' value={query} onChange={handleChange} />}
      <img src={Icon} alt='search' className='icon' onClick={toggleInput} />
    </form>
  );
};

const mapStateToProps = ({ home: { query, inputActive } }) => ({ query, inputActive });

export default connect(mapStateToProps, { toggleInput, setQuery })(memo(SearchBox));
