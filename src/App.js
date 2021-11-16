import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardsApp from "./states/CardsApp/CardsApp";
import Main from "./components/Main/Main";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path={"/cards"} component={CardsApp} />
        <Route path={"/main"} component={Main} />
        <Redirect to={"/main"} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
