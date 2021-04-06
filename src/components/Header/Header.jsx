import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import Nav from '../Nav/Nav';
import Search from './Search';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
            <Search />
            <Nav />
        </header>
    );
}
export default Header;