// src/components/Card/Card.styled.js
import styled from 'styled-components';
import { topicStyles } from '../../lib/topic';

export const CardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  /* Медиа-запрос для планшетов */
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
  }

  /* Медиа-запрос для мобильных устройств */
  @media screen and (max-width: 660px) {
    width: 220px;
    height: 130px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTopic = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topicColor }) => 
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $topicColor }) => 
      topicStyles[$topicColor]?.color || "#06b16e"};
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }

  &:hover div {
    background-color: #565EEF; 
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: #565EEF; /* Добавляем эффект при наведении */
    }
  }
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
    
    path {
      stroke: #94A6BE;
    }
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }

`;