import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../actions/authActions";
import { history } from "../router/AppRouter";



const LoggedInLinks = ({ shoppingCartLength, logOut, isCollapse }) => {

 const onLogout = () => {
    logOut();
    history.push("/");
  };


  return (
<div className={!isCollapse ? `collapse navbar-collapse` : `collapse navbar-collapse show`}>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <NavLink className="nav-link" to="/products">
        <span>
          <i className="fa fa-list-ul" aria-hidden="true" />
        </span>{" "}
        Productos
      </NavLink>
    </li>
    {
      shoppingCartLength > 0  && (
    <li className="nav-item">
      <NavLink className="nav-link" to="/shopping-cart">
        <span>
          <i className="fa fa-shopping-cart" aria-hidden="true" />
        </span>{" "}
        Carrito
        {shoppingCartLength > 0 ? (
        <span className="badge badge-pill badge-danger">
          {shoppingCartLength}
        </span>
      ) : null}
      
      </NavLink>
    </li>
      )
    }
    <li className="nav-item">
      <NavLink
      to="/profile"
        className="ml-1 nav-link"
        style={{ cursor: "pointer" }}
      >
        <span>
          <i className="fa fa-user-circle" aria-hidden="true" />
        </span>{" "}
        Account
      </NavLink>
    </li>
    <li className="nav-item">
      <div
        className="ml-1 nav-link"
        style={{ cursor: "pointer" }}
        onClick={onLogout}
      >
        <span>
          <i className="fa fa-sign-out" />
        </span>{" "}
        Logout
      </div>
    </li>
  </ul>
</div>
);

}

const mapStateToProps = state => ({
  shoppingCartLength: state.shoppingCart.length
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});



export default connect(mapStateToProps, mapDispatchToProps)(LoggedInLinks)
