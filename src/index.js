import React from "react";
import ReactDOM from "react-dom";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { AppBar, Toolbar, Typography, Card, CardContent } from "@mui/material";

const App = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <ViewComfyIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h4" component="h1">
            iTechArt react course
          </Typography>
        </Toolbar>
      </AppBar>
      <Card
        sx={{
          maxWidth: 300,
          mt: 2,
          mr: 2,
          border: 1,
          borderColor: "#999999",
          display: "inline-block",
        }}
      >
        <CardContent>
          <Typography
            variant="span"
            component="h2"
            sx={{ fontSize: 18 }}
            color="text.secondary"
            fontFamily="Roboto"
          >
            Card 1
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: 14, mt: 1 }}
            color="text.secondary"
            fontFamily="Roboto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            veritatis est iure adipisci, autem dignissimos totam inventore
            praesentium, ad deserunt quidem ut. Nemo qui incidunt porro rerum.
            Odit, distinctio incidunt.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          mt: 2,
          mr: 2,
          border: 1,
          borderColor: "#999999",
          display: "inline-block",
        }}
      >
        <CardContent>
          <Typography
            variant="span"
            component="h2"
            sx={{ fontSize: 18 }}
            color="text.secondary"
            fontFamily="Roboto"
          >
            Card 2
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: 14, mt: 1 }}
            color="text.secondary"
            fontFamily="Roboto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tenetur magni neque maxime, quidem magnam autem velit repudiandae
            illo? Sit ullam eaque tempora ipsum odit dolorum id accusantium
            suscipit deserunt?
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          mt: 2,
          border: 1,
          borderColor: "#999999",
          display: "inline-block",
        }}
      >
        <CardContent>
          <Typography
            variant="span"
            component="h2"
            sx={{ fontSize: 18 }}
            color="text.secondary"
            fontFamily="Roboto"
          >
            Card 3
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: 14, mt: 1 }}
            color="text.secondary"
            fontFamily="Roboto"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            at dolor eveniet, deleniti animi molestias aliquid minus natus
            consequatur obcaecati nihil, ad repellendus eos minima sint iste
            tempore expedita delectus!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
