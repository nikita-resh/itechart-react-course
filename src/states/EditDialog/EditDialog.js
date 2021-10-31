import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

const EditDialog = ({
  isOpen,
  handleClose,
  cardList,
  selected,
  setCardList,
}) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    setCurrentTitle(cardList.find((item) => item.id === selected)?.title);
    setCurrentText(cardList.find((item) => item.id === selected)?.text);
  }, [selected, cardList, isOpen]);

  const saveChanges = () => {
    const newCardList = cardList.map((item) => {
      if (item.id === selected) {
        return {
          ...item,
          title: currentTitle,
          text: currentText,
        };
      }
      return item;
    });
    setCardList(newCardList);
    handleClose();
  };

  const deleteCard = () => {
    const newCardList = cardList.filter((item) => item.id !== selected);
    setCardList(newCardList);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Edit a card</DialogTitle>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        sx={{ m: 1 }}
        value={currentTitle}
        onChange={(e) => {
          setCurrentTitle(e.target.value);
        }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Content"
        sx={{ m: 1, minWidth: 300 }}
        multiline
        rows={6}
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />

      <Box sx={{ justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          color="error"
          sx={{ maxWidth: 100, m: 1 }}
          onClick={deleteCard}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ maxWidth: 100, m: 1 }}
          onClick={saveChanges}
        >
          Save
        </Button>
      </Box>
    </Dialog>
  );
};

export default EditDialog;
