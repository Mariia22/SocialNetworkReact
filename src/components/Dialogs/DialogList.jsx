import React from 'react';
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    const messageItem = props.dialogs.messageData.map(message => <MessageItem message={message.message} />);
    const dialogItem = props.dialogs.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const newMessage = React.createRef();

    const addMessage = () => {
        props.addMessage();

    }
    const updateMessage = () => {
        let message = newMessage.current.value;
        props.changeMessage(message);
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
                <textarea className={style.dialogInput} ref={newMessage} value={props.dialogs.newMessage} onChange={updateMessage}></textarea>
                <button className={style.dialogButton} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}
export default DialogList;