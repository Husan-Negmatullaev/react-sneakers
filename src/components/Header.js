import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src="/img/logo.png" alt="" className="header__logo-image" />
                <div className="header__logo-info">
                    <h3 className="header__logo-title">REACT SNEAKERS</h3>
                    <p className="header__logo-text">Магазин лучших кроссовок</p>
                </div>
            </Link>
            <div className="header__menu menu">
                <ul className="menu__list">
                    <li onClick={props.onClickCart}>
                        <img className="menu__icon" src="/img/cart.svg" alt="" />
                        <span className="menu__text">1205 руб.</span>
                    </li>
                    <li>
                        <Link to="/favourites">
                            <img className="menu__icon" src="/img/favorite.svg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <img className="menu__icon" src="/img/user.svg" alt="" />
                    </li>
                </ul>
            </div>
        </header>
    )
}