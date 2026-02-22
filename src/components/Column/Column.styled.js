// src/components/Column/Column.styled.js
import styled from 'styled-components';

export const StyledColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  /* Медиа-запрос для экранов меньше 1200px */
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const StyledColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const StyledCardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  /* Медиа-запрос для экранов меньше 1200px */
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-x: auto;  /* Горизонтальный скролл */
    overflow-y: hidden; /* Убираем вертикальный скролл */
    gap: 10px;         /* Отступы между карточками */
    padding-bottom: 10px; /* Немного отступа снизу для скролла */
    
    /* Стилизуем скроллбар (опционально) */
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #EAEEF6;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #94A6BE;
      border-radius: 2px;
    }
  }
`;

export const StyledCardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }


  @media screen and (max-width: 1200px) {
    padding: 5px 0;
    
    &:first-child {
      padding-left: 5px;
    }
    
    &:last-child {
      padding-right: 5px;
    }
  }
`;