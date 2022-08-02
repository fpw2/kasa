import * as React from "react";
import { Link } from "react-router-dom"
import "../styles/header.css"
import Logo from "./Logo"

export default function Header() {
    return (
    <div className="header">
        <Logo />
        <nav className="nav">
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    </div>
    )
}