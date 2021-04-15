import React from 'react';
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let messageData = [
    { message: 'Hi' },
    { message: 'How are you!' },
    { message: 'I am OK' },
    { message: 'I am not alcoholic' }
];

let messageItem = messageData.map(message => <MessageItem message={message.message} />);


let dialogData = [
    { id: 1, name: 'Mariia' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Alina' },
    { id: 4, name: 'Malina' },
    { id: 5, name: 'Eva' },
];

let dialogElement = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

const DialogList = () => {
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
export default DialogList;