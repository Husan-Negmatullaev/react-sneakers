import React from "react";

export default function Header() {
    return (
        <header className="header">
            <a href="#" className="header__logo">
                <img src="/img/logo.png" alt="" className="header__logo-image" />
                <div className="header__logo-info">
                    <h3 className="header__logo-title">REACT SNEAKERS</h3>
                    <p className="header__logo-text">Магазин лучших кроссовок</p>
                </div>
            </a>
            <div className="header__menu menu">
                <ul className="menu__list">
                    <li>
                        <img className="menu__icon" src="/img/cart.svg" alt="" />
                        <span className="menu__text">1205 руб.</span>
                    </li>
                    <li>
                        <img className="menu__icon" src="/img/favorite.svg" alt="" />
                    </li>
                    <li>
                        <img className="menu__icon" src="/img/user.svg" alt="" />
                    </li>
                </ul>
            </div>
        </header>
    )
}