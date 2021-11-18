import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material/";
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

const CustomCard = ({ cardTitle, cardText, editMode, setSelected, cardId }) => {
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

        <IconButton
          aria-label="edit"
          className="button"
          onClick={() => {
            editMode();
            setSelected(cardId);
          }}
        >
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export const ParticularCard = ({ cardList, editMode, setSelected }) => {
  const params = useParams();
  const id = params.id;
  const card = cardList[id - 1];
  return (
    <CustomCard
      cardTitle={card?.title}
      cardText={card?.body}
      key={card?.id}
      cardId={card?.id}
      editMode={editMode}
      setSelected={setSelected}
    />
  );
};

export default CustomCard;
