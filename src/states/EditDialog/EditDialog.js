import React from "react";
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";

const EditDialog = ({ isOpen, handleClose, cardList, selected }) => {
  const card = cardList.find((item) => item.id === selected);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Edit a card</DialogTitle>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        sx={{ m: 1 }}
        value={card.title}
      />
      <TextField
        id="outlined-multiline-static"
        label="Content"
        sx={{ m: 1, minWidth: 300 }}
        multiline
        rows={6}
        value={card.text}
      />
      <Button variant="outlined" sx={{ maxWidth: 100, m: 1 }}>
        Add
      </Button>
    </Dialog>
  );
};

export default EditDialog;
