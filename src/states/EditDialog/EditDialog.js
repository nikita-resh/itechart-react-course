import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";

const EditDialog = ({ isOpen, handleClose, cardList, selected }) => {
  const card = {
    title: "",
    text: "",
  };

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    setCurrentTitle(cardList.find((item) => item.id === selected)?.title);
  }, [selected, cardList]);

  useEffect(() => {
    setCurrentText(cardList.find((item) => item.id === selected)?.text);
  }, [selected, cardList]);

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
      <Button variant="outlined" sx={{ maxWidth: 100, m: 1 }}>
        Add
      </Button>
    </Dialog>
  );
};

export default EditDialog;
