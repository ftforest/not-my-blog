import './LoginPage.css';

export const LoginPage = ({ setIsLoggedIn }) => {
  const logIn = () => setIsLoggedIn(true)
  return (
    <form onSubmit={logIn} className='loginForm'>
      <h1>Вход</h1>
      <div>
        <input type='text' placeholder='Логин' name='login' required />
      </div>
      <div>
        <input type='password' placeholder='Пароль' name='password' required />
      </div>
      <div>
        <button type='submit'>Войти</button>
      </div>
    </form>
  );
};
