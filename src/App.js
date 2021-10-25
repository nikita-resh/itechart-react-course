import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Cards from "./states/Cards/Cards";
import AddCard from "./components/AddCard/AddCard";
import Dialog from "./states/Dialog/Dialog";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("Click");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cardList, setCardList] = useState([
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
    <ThemeProvider theme={theme}>
      <Header />
      <Cards cardList={cardList} />
      <AddCard handleClickOpen={handleClickOpen} />
      <Dialog
        handleClose={handleClose}
        open={open}
        cardList={cardList}
        setCardList={setCardList}
      />
    </ThemeProvider>
  );
};

export default App;
