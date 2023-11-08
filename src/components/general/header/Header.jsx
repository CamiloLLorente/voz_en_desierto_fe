import React from 'react';
import style from './header.module.scss'

function Header() {
    return (
        <header className={style.header}>
            <img src="./src/assets/logo_ays_header.png"></img>
        </header>
    );
}

export default Header;