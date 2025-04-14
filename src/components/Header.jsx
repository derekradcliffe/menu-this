import React from 'react';
import Cart from "./Cart"
import "./styles/Header.css";

const Header = () => {
    return (
        <header>
            <h1>menu <span className="material-symbols-outlined">restaurant</span> this</h1>

            <Cart />
        </header>
    );
};

export default Header;