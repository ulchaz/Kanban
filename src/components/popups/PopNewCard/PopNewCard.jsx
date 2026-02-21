// src/components/popups/PopNewCard/PopNewCard.jsx
import React, { useState } from "react";

function PopNewCard({ onClose, onAddCard, isOpen }) {
  // Состояния для полей формы
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Web Design');
  const [date, setDate] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Валидация - проверяем, что название не пустое
    if (!title.trim()) {
      alert('Введите название задачи');
      return;
    }

    // Создаём новую задачу
    const newCard = {
      id: Date.now(),
      topic: category,
      title: title,
      description: description,
      date: date || new Date().toLocaleDateString('ru-RU').replace(/\//g, '.'),
      status: "Без статуса"
    };
    
    // Добавляем задачу через функцию из App
    onAddCard(newCard);
  };

  return (
    <div className={`pop-new-card ${isOpen ? '_active' : ''}`} 
    id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            
            {/* Кнопка закрытия */}
            <button 
              className="pop-new-card__close" 
              onClick={onClose}
            >
              &#10006;
            </button>
            
            <div className="pop-new-card__wrap">
              {/* Форма создания задачи */}
              <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input 
                    className="form-new__input" 
                    type="text" 
                    name="name" 
                    id="formTitle" 
                    placeholder="Введите название задачи..." 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    required
                  />
                </div>
                
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea 
                    className="form-new__area" 
                    name="text" 
                    id="textArea"  
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>
              
              {/* Блок с датами (календарь) */}
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>									
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <div className="calendar__month">Сентябрь 2023</div>
                    <div className="nav__actions">
                      <div className="nav__action" data-action="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </div>
                      <div className="nav__action" data-action="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Здесь можно добавить выбор даты */}
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Введите срок исполнения: 
                      <input 
                        type="text" 
                        placeholder="ДД.ММ.ГГ"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ marginLeft: '5px', padding: '2px' }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Выбор категории */}
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div 
                  className={`categories__theme _orange ${category === 'Web Design' ? '_active-category' : ''}`}
                  onClick={() => setCategory('Web Design')}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div 
                  className={`categories__theme _green ${category === 'Research' ? '_active-category' : ''}`}
                  onClick={() => setCategory('Research')}
                >
                  <p className="_green">Research</p>
                </div>
                <div 
                  className={`categories__theme _purple ${category === 'Copywriting' ? '_active-category' : ''}`}
                  onClick={() => setCategory('Copywriting')}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            
            {/* Кнопка создания задачи */}
            <button 
              className="form-new__create _hover01" 
              id="btnCreate"
              onClick={handleSubmit}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;