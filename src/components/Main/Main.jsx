// src/components/Main/Main.jsx
import React from 'react';
import Column from '../Column/Column';
import { MainContainer, MainBlock, MainContent, LoadingText } from './Main.styled';

function Main({ isLoading, cards, statusList }) {
  if (isLoading) {
    return (
      <MainContainer>
        <div className="container">  {/* Добавляем класс container */}
          <MainBlock>
            <MainContent>
              <LoadingText>Данные загружаются...</LoadingText>
            </MainContent>
          </MainBlock>
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <div className="container">  {/* Добавляем класс container */}
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter(
                  (card) => card.status === status
                )}
              />
            ))}
          </MainContent>
        </MainBlock>
      </div>
    </MainContainer>
  );
}

export default Main;