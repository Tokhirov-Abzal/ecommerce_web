import React, { useContext } from "react";
import { Context } from "..";
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="nav">
      <NavLink className="logo" to={SHOP_ROUTE}>
        Logo
      </NavLink>

      {user.isAuth ? (
        <div className="navLink__container">
          <NavLink className="navLink__btn" to={LOGIN_ROUTE}>
            <div>Logout</div>
          </NavLink>
          <NavLink className="navLink__btn" to={ADMIN_ROUTE}>
            <div>Admin Panel</div>
          </NavLink>
        </div>
      ) : (
        <div className="navLink__container">
          <NavLink
            className="navLink__btn"
            to={LOGIN_ROUTE}
            onClick={() => user.setIsAuth(true)}
          >
            <div>Register</div>
          </NavLink>
        </div>
      )}
    </div>
  );
});

export default NavBar;
