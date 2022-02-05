import { Redirect } from "react-router-dom";
import React from "react";
const Auth = ({ children }) => {
  const username = localStorage.getItem("username");
  if (username) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
};

export default Auth;
