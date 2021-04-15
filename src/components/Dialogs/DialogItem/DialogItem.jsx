import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialog.module.css'



const DialogItem = (props) => {
    let path = '/dialog/' + props.id;
    return (
        <li><NavLink to={path}>{props.name}</NavLink></li>
    )
}

export default DialogItem;