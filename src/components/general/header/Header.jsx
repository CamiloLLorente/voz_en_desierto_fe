import React from 'react';
import style from './header.module.scss'
import logo_ays_header from "../../../assets/logo_ays_header.png";

function Header() {
    return (
        <header className={style.header}>
            <img src={logo_ays_header}></img>
        </header>
    );
}

export default Header;