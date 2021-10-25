import React from "react";
import Card from "../../components/Card/Card";

const Cards = ({ cardList }) => {
  return (
    <>
      {cardList.map((card) => (
        <Card cardTitle={card.title} cardText={card.text} key={card.id} />
      ))}
    </>
  );
};

export default Cards;
