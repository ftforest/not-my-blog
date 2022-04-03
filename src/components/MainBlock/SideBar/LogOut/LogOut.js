import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../../../assets/images/left-arrow.svg';
import './LogOut.css';

export const LogOut = ({ setIsLoggedIn }) => {

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    history.push('/login');
  }

  return (
    <section className='sidebarBottom'>
      <button onClick={logOut}>
        <ArrowLeftIcon height={25} width={25} />
        <span>Выход</span>
      </button>
    </section>
  );
};
