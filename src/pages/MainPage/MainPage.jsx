// src/pages/MainPage/MainPage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { cardList as initialCards, statusList } from '../../data';
import PopExit from '../../components/popups/PopExit/PopExit';
import PopNewCard from '../../components/popups/PopNewCard/PopNewCard';
import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import { MainPageContainer } from './MainPage.styled';

function MainPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewCardOpen, setIsNewCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openNewCard = () => setIsNewCardOpen(true);
  const closeNewCard = () => setIsNewCardOpen(false);

  const openBrowse = (card) => {
    setSelectedCard(card);
  };
  const closeBrowse = () => setSelectedCard(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(initialCards);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddCard = (newCardData) => {
    const newCard = {
      id: Date.now(),
      topic: newCardData?.topic || "Web Design",
      title: newCardData?.title || "Новая задача",
      date: newCardData?.date || new Date().toLocaleDateString('ru-RU').replace(/\//g, '.'),
      status: "Без статуса"
    };
    setCards([...cards, newCard]);
    closeNewCard();
  };

  return (
    <MainPageContainer>
      <Header onOpenNewCard={openNewCard} />
      
      <Main 
        isLoading={isLoading}
        cards={cards}
        statusList={statusList}
        onCardClick={openBrowse}
      />
      
      {isNewCardOpen && (
        <PopNewCard 
          onClose={closeNewCard}
          onAddCard={handleAddCard}
        />
      )}
      
      {selectedCard && (
        <PopBrowse 
          onClose={closeBrowse}
          card={selectedCard}
        />
      )}
    </MainPageContainer>
  );
}

export default MainPage;