import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Tabs, Tab } from "@mui/material";
import "./Tabs.scss";

function LinkTab(props) {
  return <Tab component={NavLink} {...props} />;
}

const CustomTabs = ({ cards }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 1, pl: 0 }}>
      <Box>
        <Tabs
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          value={value}
        >
          <LinkTab to="/cards" label="All cards" className="black" value={0} />
          {cards.map((item, index) => (
            <LinkTab
              to={`/cards/${item.id}`}
              label={`Card ${index + 1}`}
              className="black"
              key={item.id}
              value={item.id}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default CustomTabs;
