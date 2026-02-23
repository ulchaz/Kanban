// src/components/popups/PopNewCard/PopNewCard.jsx
import React, { useState } from "react";
import {
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewLabel,
  FormNewInput,
  FormNewTextarea,
  Calendar,
  CalendarTitle,
  CalendarPeriod,
  Categories,
  CategoriesTitle,
  CategoriesThemes,
  CategoriesTheme,
  FormNewCreate
} from './PopNewCard.styled';

function PopNewCard({ onClose, onAddCard }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('orange');
  const [date, setDate] = useState('');

  const getCategoryName = () => {
    switch(category) {
      case 'orange': return 'Web Design';
      case 'green': return 'Research';
      case 'purple': return 'Copywriting';
      default: return 'Web Design';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Введите название задачи');
      return;
    }

    const newCard = {
      id: Date.now(),
      topic: getCategoryName(),
      title: title,
      description: description,
      date: date || new Date().toLocaleDateString('ru-RU').replace(/\//g, '.'),
      status: "Без статуса"
    };
    
    onAddCard(newCard);
  };

  return (
    <PopNewCardContainer>
      <PopNewCardBlock>
        <PopNewCardContent>
          <PopNewCardTitle>Создание задачи</PopNewCardTitle>
          <PopNewCardClose onClick={onClose}>✕</PopNewCardClose>
          
          <PopNewCardWrap>
            <PopNewCardForm onSubmit={handleSubmit}>
              <FormNewBlock>
                <FormNewLabel htmlFor="formTitle">Название задачи</FormNewLabel>
                <FormNewInput 
                  type="text" 
                  id="formTitle"
                  placeholder="Введите название задачи..." 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                  required
                />
              </FormNewBlock>
              
              <FormNewBlock>
                <FormNewLabel htmlFor="textArea">Описание задачи</FormNewLabel>
                <FormNewTextarea 
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormNewBlock>
            </PopNewCardForm>
            
            <Calendar>
              <CalendarTitle>Даты</CalendarTitle>
              <CalendarPeriod>
                <p>
                  Введите срок исполнения: 
                  <input 
                    type="text" 
                    placeholder="ДД.ММ.ГГ"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ marginLeft: '5px', padding: '2px' }}
                  />
                </p>
              </CalendarPeriod>
            </Calendar>
          </PopNewCardWrap>
          
          <Categories>
            <CategoriesTitle>Категория</CategoriesTitle>
            <CategoriesThemes>
              <CategoriesTheme 
                $color="orange" 
                $isActive={category === 'orange'}
                onClick={() => setCategory('orange')}
              >
                <p>Web Design</p>
              </CategoriesTheme>
              <CategoriesTheme 
                $color="green" 
                $isActive={category === 'green'}
                onClick={() => setCategory('green')}
              >
                <p>Research</p>
              </CategoriesTheme>
              <CategoriesTheme 
                $color="purple" 
                $isActive={category === 'purple'}
                onClick={() => setCategory('purple')}
              >
                <p>Copywriting</p>
              </CategoriesTheme>
            </CategoriesThemes>
          </Categories>
          
          <FormNewCreate onClick={handleSubmit}>
            Создать задачу
          </FormNewCreate>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardContainer>
  );
}

export default PopNewCard;