import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const iconStyles = { mr: 2 };

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ViewComfyIcon fontSize="large" sx={iconStyles} />
        <Typography variant="h4" component="h1">
          iTechArt react course
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
