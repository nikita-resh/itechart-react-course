import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { apiClient } from "./apiClient/apiClient";
import Header from "./states/Header/Header";
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

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    apiClient.cards
      .getAll()
      .then((res) => res.data)
      .then((cards) => setCardList(cards.slice(0, 10)))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header cardList={cardList} setCardList={setCardList} />
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
