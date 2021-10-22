import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const cardStyles = {
  maxWidth: 300,
  mt: 2,
  mr: 2,
  border: 1,
  borderColor: "#999999",
  display: "inline-block",
};

const CustomCard = ({ cardTitle, cardText }) => {
  return (
    <Card sx={cardStyles}>
      <CardContent>
        <Typography
          variant="span"
          component="h2"
          sx={{ fontSize: 18 }}
          fontFamily="Roboto"
        >
          {cardTitle}
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: 14, mt: 1 }}
          fontFamily="Roboto"
        >
          {cardText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
