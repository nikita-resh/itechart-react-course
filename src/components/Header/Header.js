import React from "react";
import { v4 as uuidv4 } from "uuid";
import getCard from "../../controllers/getCard";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const iconStyles = { mr: 2 };

const Header = ({ cardList, setCardList }) => {
  const handleAdd = async () => {
    const card = await getCard();
    const { title, body: text } = card;
    setCardList([...cardList, { id: uuidv4(), title, text }]);
  };
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => handleAdd()}
      >
        <ViewComfyIcon fontSize="large" sx={iconStyles} />
        <Typography variant="h4" component="h1">
          iTechArt react course
        </Typography>
        <Button variant="outlined">JSON Placeholder card</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
