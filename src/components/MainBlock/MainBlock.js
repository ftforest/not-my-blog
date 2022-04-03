import { Posts } from './Posts/Posts';
import { SideBar } from './SideBar/SideBar';

import './MainBlock.css';
import { Route } from 'react-router-dom';
import { Favourite } from '../../pages/Favourite/Favourite';
import { useFetchPosts } from '../../utils/hooks';
import { POSTS_URL } from '../../utils/constants';

export const MainBlock = ({ setIsLoggedIn, isLoggedIn }) => {
  const postsData = useFetchPosts(POSTS_URL);

  return (
    <>
      <SideBar setIsLoggedIn={setIsLoggedIn} />
      <main className='mainBlock'>
        <Route exact path='/blog'>
          <Posts title="Posts" {...postsData} />
        </Route>
        <Route exact path='/favourite' component={Favourite}>
          <Posts title="Favourite posts" {...postsData} isLikedPosts />
        </Route>
      </main>
    </>
  );
};
