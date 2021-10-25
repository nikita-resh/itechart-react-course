import React from "react";
import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const AddCardStyles = {
  width: 300,
  height: 200,
  border: 1,
  borderColor: "#999999",
  backgroundColor: "#121212",
  display: "block",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(18, 18, 18, 0.85)",
  },
};

const AddCard = ({ handleClickOpen }) => {
  return (
    <Button sx={AddCardStyles} onClick={handleClickOpen}>
      <ControlPointIcon sx={{ width: 80, height: 80 }} />
    </Button>
  );
};

export default AddCard;
