import { useState } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import { MainBlock } from './components/MainBlock/MainBlock';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { POSTS_URL } from './utils/constants';
import { useFetchPosts } from './utils/hooks';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const postsData = useFetchPosts(POSTS_URL);

  const blogPostRoutes = postsData.blogPosts.map((post) => {
    return `/blog/${post.id}`;
  });

  return (
    <div className='App'>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          isLoggedIn={isLoggedIn}
          blogPostRoutes={blogPostRoutes}
        >
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        </PublicRoute>

        <PrivateRoute
          path='/'
          isLoggedIn={isLoggedIn}
          blogPostRoutes={blogPostRoutes}
        >
          <MainBlock setIsLoggedIn={setIsLoggedIn} postsData={postsData} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
