import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Cards from "./states/Cards/Cards";
import AddCard from "./components/AddCard/AddCard";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Cards />
      <AddCard />
    </ThemeProvider>
  );
};

export default App;
