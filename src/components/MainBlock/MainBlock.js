import { SideBar } from './SideBar/SideBar';

import './MainBlock.css';
import { Route } from 'react-router-dom';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { BlogPostPage } from '../../pages/BlogPostPage/BlogPostPage';

export const MainBlock = ({ postsData }) => {

  return (
    <>
      <SideBar />
      <main className='mainBlock'>
        <Switch>
          <Route exact path='/blog'>
            <BlogPage title="Posts" {...postsData} />
          </Route>
          {/* <Route exact path='/favourite'>
            <BlogPage title="Favourite posts" {...postsData} isLikedPosts />
          </Route> */}
          <Route path="/blog/:postId">
            <BlogPostPage setBlogPosts={postsData.setBlogPosts} />
          </Route>
          <Route exact path='/'>
            <Redirect to='/blog' />
          </Route>
        </Switch>
      </main>
    </>
  );
};
