import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";

const CustomDialog = ({ isOpen, handleClose, cardList, setCardList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const AddCard = () => {
    setTitle("");
    setContent("");
    setCardList([
      ...cardList,
      { id: cardList.length + 1, title, text: content },
    ]);
    handleClose();
  };

  useEffect(() => {
    if (title === "" || content === "") {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [title, content]);

  useEffect(() => {
    setTitle("");
    setContent("");
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
      <Button
        variant="outlined"
        sx={{ maxWidth: 100, m: 1 }}
        onClick={AddCard}
        disabled={!isFilled}
      >
        Add
      </Button>
    </Dialog>
  );
};

export default CustomDialog;
