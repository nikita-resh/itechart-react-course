import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { apiClient } from "../../apiClient/apiClient";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const iconStyles = { mr: 2 };

const Header = ({ cardList, setCardList }) => {
  const [num, setNum] = useState();
  const [isValid, setIsValid] = useState(true);

  const handleAddClick = async () => {
    const n = num || Math.ceil(100 * Math.random());
    try {
      const card = await apiClient.cards.get(n).then((res) => res.data);
      addCard(card);
    } catch (e) {
      console.log(e.message);
    }
  };

  const addCard = (card) => {
    const { title, body: text } = card;
    setCardList([...cardList, { id: uuidv4(), title, text }]);
  };

  const handleChange = (value) => {
    setIsValid((0 < value && value <= 100) || !value);
    setNum(value);
  };

  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <ViewComfyIcon fontSize="large" sx={iconStyles} />
        <Typography variant="h4" component="h1">
          iTechArt react course
        </Typography>
        <div>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            size="small"
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => handleChange(e.target.value)}
            sx={{ width: "110px", mr: 2 }}
          />
          <Button
            variant="outlined"
            onClick={() => handleAddClick()}
            disabled={!isValid}
            sx={{ mr: 2 }}
          >
            JSON Placeholder card
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
