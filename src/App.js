import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Cards from "./states/Cards/Cards";
import AddCard from "./components/AddCard/AddCard";
import Dialog from "./states/Dialog/Dialog";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("Click");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Cards />
      <AddCard handleClickOpen={handleClickOpen} />
      <Dialog handleClose={handleClose} open={open} />
    </ThemeProvider>
  );
};

export default App;
