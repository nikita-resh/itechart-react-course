import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";
import { postCard } from "../../controllers/card";
import { Box } from "@mui/system";

const CustomDialog = ({ isOpen, handleClose, cardList, setCardList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const cleanForm = () => {
    setTitle("");
    setContent("");
  };

  const addCard = () => {
    const newCard = { id: uuidv4(), title, text: content };
    setCardList([...cardList, newCard]);
    postCard(newCard);
    cleanForm();
    handleClose();
  };

  useEffect(() => {
    if (!title.trim() || !content.trim()) {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [title, content]);

  useEffect(() => {
    cleanForm();
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add new card</DialogTitle>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ m: 1 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Content"
        sx={{ m: 1, minWidth: 300 }}
        multiline
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          sx={{ maxWidth: 100, m: 1 }}
          onClick={addCard}
          disabled={!isFilled}
        >
          Add
        </Button>
      </Box>
    </Dialog>
  );
};

export default CustomDialog;
