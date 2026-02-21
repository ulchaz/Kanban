// src/components/Column/Column.jsx
import Card from '../Card/Card';

function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map(card => (
          <div className="cards__item" key={card.id}>
            <Card 
              topic={card.topic} 
              title={card.title}
              date={card.date} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;