import { memo } from 'react';

import Main from '../../components/main';
import Sidebar from '../../components/sidebar';

const Home = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default memo(Home);
