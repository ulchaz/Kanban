// src/components/Column/Column.jsx
import Card from '../Card/Card';
import {
  StyledColumn,
  StyledColumnTitle,
  StyledCardsContainer,
  StyledCardItem
} from './Column.styled';

function Column({ title, cardList }) {
  return (
    <StyledColumn className="main__column column">
      <StyledColumnTitle className="column__title">
        <p>{title}</p>
      </StyledColumnTitle>
      <StyledCardsContainer className="cards">
        {cardList.map(card => (
          <StyledCardItem className="cards__item" key={card.id}>
            <Card 
              topic={card.topic} 
              title={card.title}
              date={card.date} 
            />
          </StyledCardItem>
        ))}
      </StyledCardsContainer>
    </StyledColumn>
  );
}

export default Column;