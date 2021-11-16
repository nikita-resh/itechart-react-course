import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { apiClient } from "../../apiClient/apiClient";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const iconStyles = {
  mr: 2,
  "&:hover": {
    opacity: "0.5",
    cursor: "pointer",
    transition: "all .3s ease-in-out",
  },
};

const Header = ({ cardList, setCardList, toggleSideBar }) => {
  const [num, setNum] = useState();
  const [isValid, setIsValid] = useState(true);
  let isUnmountedRef = useRef(false);

  useEffect(() => {
    return () => {
      isUnmountedRef.current = true;
    };
  }, []);

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
    if (!isUnmountedRef.current) {
      setCardList([...cardList, { ...card, id: uuidv4() }]);
    }
  };

  const handleChange = (value) => {
    setIsValid((0 < value && value <= 100) || !value);
    setNum(value);
  };

  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <MenuIcon
          fontSize="large"
          sx={iconStyles}
          onClick={() => toggleSideBar()}
        />
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
