import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./SideBar.scss";

const SideBar = ({ isSideBarOpen, toggleSideBar }) => (
  <Fragment>
    <SwipeableDrawer open={isSideBarOpen} onClose={toggleSideBar}>
      <NavLink to="/main">
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Main page"} className="no-styles" />
          </ListItem>
        </List>
      </NavLink>
    </SwipeableDrawer>
  </Fragment>
);

export default SideBar;
