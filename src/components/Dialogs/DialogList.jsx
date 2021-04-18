import React from 'react';
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    const messageItem = props.state.messageData.map(message => <MessageItem message={message.message} />);
    const dialogItem = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                {dialogItem}
            </ul>
            <ul className={style.message}>
                {messageItem}
            </ul>
        </div>
    );
}
export default DialogList;