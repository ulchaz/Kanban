// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundBlock,
  NotFoundTitle,
  NotFoundText,
  NotFoundLink
} from './NotFound.styled';

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundBlock>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Страница не найдена</NotFoundText>
        <Link to="/">
          <NotFoundLink>Вернуться на главную</NotFoundLink>
        </Link>
      </NotFoundBlock>
    </NotFoundContainer>
  );
}

export default NotFound;