import React from "react";
import { Link, useLocation } from "react-router-dom";

const ActiveLink = ({ to, activeStyle, ...rest }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} style={isActive ? activeStyle : {}} {...rest} />
  );
};

export default ActiveLink;
