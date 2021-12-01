import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <div className="auth__block">
      <div className="auth__container">
        <h1 style={{ textAlign: "center", marginBottom: "70px" }}>
          {isLogin ? " Authorization" : "Registration"}
        </h1>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" />

        <label htmlFor="password">Password: </label>
        <input type="password" />

        <button type="submit">Enter</button>
        <h3>No account yet? </h3>
        {isLogin ? (
          <NavLink to={REGISTRATION_ROUTE} style={{ color: "green" }}>
            <h3>Register</h3>
          </NavLink>
        ) : (
          <NavLink to={LOGIN_ROUTE} style={{ color: "green" }}>
            <h3>SignIn</h3>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Auth;
