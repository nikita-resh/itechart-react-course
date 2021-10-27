import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material/";
import "./Card.scss";

const cardStyles = {
  width: 300,
  height: 220,
  mt: 2,
  mr: 2,
  p: 1,
  border: 1,
  borderColor: "#999999",
  display: "inline-block",
};

const CustomCard = ({ cardTitle, cardText }) => {
  return (
    <Card sx={cardStyles} className="card">
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
        <div className="buttons">
          <IconButton aria-label="delete" className="icon-btn">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" className="icon-btn">
            <EditIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
