import { useState } from 'react';
import './App.css';
import { MainBlock } from './components/MainBlock/MainBlock';
import { LoginPage } from './pages/LoginPage/LoginPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {
        isLoggedIn ? (
          <MainBlock setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        )
      }
    </div>
  );
}

export default App;
