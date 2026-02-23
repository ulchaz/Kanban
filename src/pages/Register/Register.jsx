// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  RegisterContainer,
  RegisterBlock,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterLink,
  RegisterError
} from './Register.styled';

function Register({ setIsAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError('Заполните все поля');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    
    // Имитация регистрации
    setIsAuth(true);
    navigate('/');
  };

  return (
    <RegisterContainer>
      <RegisterBlock>
        <RegisterTitle>Регистрация</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <RegisterInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <RegisterInput
            type="password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <RegisterError>{error}</RegisterError>}
          <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
        </RegisterForm>
        <RegisterLink>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </RegisterLink>
      </RegisterBlock>
    </RegisterContainer>
  );
}

export default Register;