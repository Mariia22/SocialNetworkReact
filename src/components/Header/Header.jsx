import React from 'react';
import Logo from './Logo';
import Nav from '../Nav/Nav';
import Search from './Search';
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <Logo />
            <Search />
            <Nav login={props.login} />
        </header>
    );
}
export default Header;