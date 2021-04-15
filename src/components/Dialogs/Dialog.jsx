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
    { message: 'I am OK' },
    { message: 'I am not alcoholic'}
];


const DialogItem = (props) => {
    let path = '/dialog/' + props.id;
    return (
        <li><NavLink to={path}>{props.name}</NavLink></li>
    )
}
let dialogElement = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

const MessageItem = (props) => {
    return (
        <li>{props.message}</li>
    )
}

let messageItem = messageData.map(message => <MessageItem message={message.message} />);

const Dialog = () => {
    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                {dialogElement}
            </ul>
            <ul className={style.message}>
                {messageItem}
            </ul>
        </div>
    );
}
export default Dialog;