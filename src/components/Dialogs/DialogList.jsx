import React from 'react';
import { addMessageActionCreator, changeMessageActionCreator } from '../redux/dialogs_reduce.js'
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    const messageItem = props.state.dialogs.messageData.map(message => <MessageItem message={message.message} />);
    const dialogItem = props.state.dialogs.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());

    }
    const updateMessage = (e) => {
        let message = e.target.value;
        props.dispatch(changeMessageActionCreator(message));
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
                <textarea className={style.dialogInput} value={props.state.dialogs.newMessage} onChange={updateMessage}></textarea>
                <button className={style.dialogButton} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}
export default DialogList;