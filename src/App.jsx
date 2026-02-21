import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Column from './components/Column/Column';
import {cardList as initialCards, statusList} from "./data";
import PopExit from './components/popups/PopExit/PopExit';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewCardOpen, setIsNewCardOpen] = useState(false);

  const openNewCard = () => {
    setIsNewCardOpen(true);
  };
  
  const closeNewCard = () => {
    setIsNewCardOpen(false);
  };
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
    <div className="wrapper">
      <Header onOpenNewCard={openNewCard} />
      
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {isLoading ? (
                <div className="loading">Данные загружаются...</div>
              ) : (
                statusList.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cardList={cards.filter(
                      (card) => card.status === status
                    )}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      
      <PopExit />
      {isNewCardOpen && (
        <PopNewCard 
          onClose={closeNewCard}
          onAddCard={handleAddCard}
          isOpen={isNewCardOpen} 
        />
      )}
      <PopBrowse />
    </div>
  );
}

export default App;