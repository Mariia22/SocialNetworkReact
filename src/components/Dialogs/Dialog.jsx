import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css'

const DialogItem = (props) => {
    let path = '/dialog/' + props.id;
    return (
        <li><NavLink to={path}>{props.name}</NavLink></li>
    )
}

const MessageItem = (props) => {
    return (
        <li>{props.message}</li>
    )
}
const Dialog = () => {
    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                <DialogItem name='Mariia' id='1' />
                <DialogItem name='Anna' id='2' />
                <DialogItem name='Alina' id='3' />
                <DialogItem name='Malina' id='4' />
                <DialogItem name='Eva' id='5' />
            </ul>
            <ul className={style.message}>
                <MessageItem message='Hi' />
                <MessageItem message='How are you!' />
                <MessageItem message='I am OK' />
            </ul>
        </div>
    );
}
export default Dialog;