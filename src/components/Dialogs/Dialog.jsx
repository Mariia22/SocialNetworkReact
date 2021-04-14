import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css'

let dialogData = [
    { id: 1, name: 'Mariia' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Alina' },
    { id: 4, name: 'Malina' },
    { id: 5, name: 'Eva' },
];

let messageData = [
    { message: 'Hi' },
    { message: 'How are you!' },
    { message: 'I am OK' }
];
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
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
            </ul>
            <ul className={style.message}>
                <MessageItem message={messageData[0].message} />
                <MessageItem message={messageData[1].message} />
                <MessageItem message={messageData[2].message} />
            </ul>
        </div>
    );
}
export default Dialog;