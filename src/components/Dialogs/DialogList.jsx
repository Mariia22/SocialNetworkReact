import React from 'react';
import style from './Dialog.module.css';
import { Redirect } from 'react-router-dom';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    console.log(props);
    const messageItem = props.messages.map(message => <MessageItem message={message.message} key={message.id} />);
    const dialogItem = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    const addMessage = () => {
        props.addMessage();
    }
    const updateMessage = (e) => {
        let message = e.target.value;
        props.changeMessage(message);
    }
    if (!props.login) { <Redirect to='login' /> }
    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                {dialogItem}
            </ul>
            <div className={style.containerMessage}>
                <ul className={style.message}>
                    {messageItem}
                </ul>
                <textarea className={style.dialogInput} value={props.newMessage} onChange={updateMessage}></textarea>
                <button className={style.dialogButton} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}
export default DialogList;