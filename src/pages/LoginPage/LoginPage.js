import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../store/slices/auth';
import './LoginPage.css';

export const LoginPage = () => {

  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn());
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit} className='loginForm'>
      <h1>Вход</h1>
      <div>
        <input
          ref={loginRef}
          type='text'
          placeholder='Логин'
          name='login'
          required
        />
      </div>
      <div>
        <input
          ref={passwordRef}
          type='password'
          placeholder='Пароль'
          name='password'
          required
        />
      </div>
      <div>
        <button type='submit'>Войти</button>
      </div>
    </form>
  );
};
