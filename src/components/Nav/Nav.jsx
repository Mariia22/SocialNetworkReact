import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <ul className={style.appNav}>
            <li>
                <NavLink to='/profile/1' activeClassName={style.activeLink}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink>
            </li>
            <li>
                <NavLink to='/dialog' activeClassName={style.activeLink}>Messages</NavLink>
            </li>
            <li>
                <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
            </li>
            <li>
                <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
            </li>
            <li>
                <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink>
            </li>
        </ul >
    );
}
export default Nav;