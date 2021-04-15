import React from 'react';
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    let messageItem = props.messages.map(message => <MessageItem message={message.message} />);
    let dialogElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

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