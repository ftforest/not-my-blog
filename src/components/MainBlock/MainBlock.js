import { SideBar } from './SideBar/SideBar';

import './MainBlock.css';
import { Route } from 'react-router-dom';
import { useFetchPosts } from '../../utils/hooks';
import { POSTS_URL } from '../../utils/constants';
import { BlogPage } from '../../pages/BlogPage/BlogPage';

export const MainBlock = ({ setIsLoggedIn, isLoggedIn }) => {
  const postsData = useFetchPosts(POSTS_URL);

  return (
    <>
      <SideBar setIsLoggedIn={setIsLoggedIn} />
      <main className='mainBlock'>
        <Route exact path='/blog'>
          <BlogPage title="Posts" {...postsData} />
        </Route>
        <Route exact path='/favourite'>
          <BlogPage title="Favourite posts" {...postsData} isLikedPosts />
        </Route>
      </main>
    </>
  );
};
