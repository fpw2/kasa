import * as React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "./Logo";

export default function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="header">
      <Logo />
      <nav className="nav">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          A propos</NavLink>
      </nav>
    </div>
  );
}
