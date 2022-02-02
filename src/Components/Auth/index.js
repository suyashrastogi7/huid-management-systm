import { Redirect } from "react-router-dom";
import React from "react";
const Auth = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
};

export default Auth;
