// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginBlock,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLink,
  LoginError
} from './Login.styled';

function Login({ setIsAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Простая валидация для демо
    if (!email || !password) {
      setError('Заполните все поля');
      return;
    }
    
    // Имитация авторизации
    setIsAuth(true);
    navigate('/');
  };

  return (
    <LoginContainer>
      <LoginBlock>
        <LoginTitle>Вход в аккаунт</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <LoginError>{error}</LoginError>}
          <LoginButton type="submit">Войти</LoginButton>
        </LoginForm>
        <LoginLink>
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </LoginLink>
      </LoginBlock>
    </LoginContainer>
  );
}

export default Login;