import { useState } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import { MainBlock } from './components/MainBlock/MainBlock';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { LoginPage } from './pages/LoginPage/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  return (
    <div className='App'>
      <Switch>
        <PublicRoute exact path='/login' isLoggedIn={isLoggedIn}>
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        </PublicRoute>

        <PrivateRoute path='/' isLoggedIn={isLoggedIn}>
          <MainBlock setIsLoggedIn={setIsLoggedIn} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
