import React from 'react';
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import AddNewMessage from '../Forms/AddNewMessage';

const DialogList = (props) => {
    const messageItem = props.messages.map(message => <MessageItem message={message.message} key={message.id} />);
    const dialogItem = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    const addMessage = (value) => {
        console.log(value);
        props.addMessage(value.newMessageText);
    }
    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                {dialogItem}
            </ul>
            <div className={style.containerMessage}>
                <ul className={style.message}>
                    {messageItem}
                </ul>
                <AddNewMessage onSubmit={addMessage} />
            </div>
        </div>
    );
}
export default DialogList;