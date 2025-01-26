import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();

    if (login === 'admin' && password === 'admin') {
      localStorage.setItem('role', 'admin'); 
      setMessage('Вход успешен!');
      navigate('/home'); 
    } else if (login === 'user' && password === 'user') {
      localStorage.setItem('role', 'user'); 
      setMessage('Вход успешен!');
      navigate('/home');
    } else {
      setMessage('Неверный логин или пароль.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="login">Логин:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
