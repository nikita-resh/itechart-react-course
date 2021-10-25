import React, { useState } from "react";
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";

const CustomDialog = ({ open, handleClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <Dialog open={open} onClose={handleClose}>
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
        label="Multiline"
        sx={{ m: 1, minWidth: 300 }}
        multiline
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant="outlined"
        href="#outlined-buttons"
        sx={{ maxWidth: 100, m: 1 }}
      >
        Add
      </Button>
    </Dialog>
  );
};

export default CustomDialog;
