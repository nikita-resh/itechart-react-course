import React, { useState } from "react";

import Card from "../../components/Card/Card";

const Cards = () => {
  const [cardList] = useState([
    {
      id: 1,
      title: "Card 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis est iure adipisci, autem dignissimos totam inventore praesentium, ad deserunt quidem ut. Nemo qui incidunt porro rerum. Odit, distinctio incidunt.",
    },
    {
      id: 2,
      title: "Card 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur magni neque maxime, quidem magnam autem velit repudiandae illo? Sit ullam eaque tempora ipsum odit dolorum id accusantium suscipit deserunt?",
    },
    {
      id: 3,
      title: "Card 3",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam at dolor eveniet, deleniti animi molestias aliquid minus natus consequatur obcaecati nihil, ad repellendus eos minima sint iste tempore expedita delectus!",
    },
  ]);

  return (
    <>
      {cardList.map((card) => (
        <Card cardTitle={card.title} cardText={card.text} key={card.id} />
      ))}
    </>
  );
};

export default Cards;
