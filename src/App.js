import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import Cards from "./states/Cards/Cards";
import AddCard from "./components/AddCard/AddCard";
import Dialog from "./states/Dialog/Dialog";
import EditDialog from "./states/EditDialog/EditDialog";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [isCreateModeOpen, setIsCreateModeOpen] = useState(false);
  const [isEditModeOpen, setIsEditModeOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClickOpen = (set) => {
    return function () {
      set(true);
    };
  };

  const handleClose = (set) => {
    return function () {
      set(false);
    };
  };

  const [cardList, setCardList] = useState([
    {
      id: uuidv4(),
      title: "Card 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis est iure adipisci, autem dignissimos totam inventore praesentium, ad deserunt quidem ut. Nemo qui incidunt porro rerum. Odit, distinctio incidunt.",
    },
    {
      id: uuidv4(),
      title: "Card 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur magni neque maxime, quidem magnam autem velit repudiandae illo? Sit ullam eaque tempora ipsum odit dolorum id accusantium suscipit deserunt?",
    },
    {
      id: uuidv4(),
      title: "Card 3",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam at dolor eveniet, deleniti animi molestias aliquid minus natus consequatur obcaecati nihil, ad repellendus eos minima sint iste tempore expedita delectus!",
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Cards
        cardList={cardList}
        editMode={handleClickOpen(setIsEditModeOpen)}
        setSelected={setSelected}
      />
      <AddCard handleClickOpen={handleClickOpen(setIsCreateModeOpen)} />
      <Dialog
        handleClose={handleClose(setIsCreateModeOpen)}
        isOpen={isCreateModeOpen}
        cardList={cardList}
        setCardList={setCardList}
      />
      <EditDialog
        isOpen={isEditModeOpen}
        handleClose={handleClose(setIsEditModeOpen)}
        selected={selected}
        cardList={cardList}
        setCardList={setCardList}
      />
    </ThemeProvider>
  );
};

export default App;
