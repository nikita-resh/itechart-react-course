import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ViewComfyIcon fontSize="large" sx={{ mr: 2 }} />
        <Typography variant="h4" component="h1">
          iTechArt react course
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
