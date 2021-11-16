import React from "react";
import { NavLink } from "react-router-dom";
import "./Main.scss";

const Main = () => (
  <div className="Main">
    <NavLink to="/cards">
      <button className="btn-cards">Cards</button>
    </NavLink>
  </div>
);

export default Main;
