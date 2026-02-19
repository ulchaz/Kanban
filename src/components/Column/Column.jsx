// src/components/Column/Column.jsx
import Card from '../Card/Card';

function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="cards__item" key={index}>
            <Card 
              theme={card.theme} 
              themeClass={card.themeClass} 
              title={card.title} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;