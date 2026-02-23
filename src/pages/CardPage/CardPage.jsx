// src/pages/CardPage/CardPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CardPageContainer,
  CardPageBlock,
  CardPageTitle,
  CardPageContent,
  CardPageInfo,
  CardPageBackLink
} from './CardPage.styled';

function CardPage() {
  const { id } = useParams(); // Получаем id из URL

  return (
    <CardPageContainer>
      <CardPageBlock>
        <CardPageTitle>Просмотр карточки</CardPageTitle>
        <CardPageContent>
          <CardPageInfo>
            <strong>ID карточки:</strong> {id}
          </CardPageInfo>
          <CardPageInfo>
            <strong>Здесь будет детальная информация о задаче</strong>
          </CardPageInfo>
          <Link to="/">
            <CardPageBackLink>Вернуться на главную</CardPageBackLink>
          </Link>
        </CardPageContent>
      </CardPageBlock>
    </CardPageContainer>
  );
}

export default CardPage;