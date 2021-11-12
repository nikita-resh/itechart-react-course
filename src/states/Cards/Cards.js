import React from "react";
import Card from "../../components/Card/Card";

const Cards = ({ cardList, editMode, setSelected }) => {
  return (
    <>
      {cardList.map((card) => (
        <Card
          cardTitle={card.title}
          cardText={card.body}
          key={card.id}
          cardId={card.id}
          editMode={editMode}
          setSelected={setSelected}
        />
      ))}
    </>
  );
};

export default Cards;
