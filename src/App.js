import React from "react";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header/Header";
import Cards from "./states/Cards/Cards";

const theme = createMuiTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Cards />
    </ThemeProvider>
  );
};

export default App;
