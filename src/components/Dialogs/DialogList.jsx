import React from 'react';
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    const messageItem = props.state.messageData.map(message => <MessageItem message={message.message} />);
    const dialogItem = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const newMessage = React.createRef();
    const addMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    }
    return (
        <div className={style.dialogs}>
            <ul className={style.dialog}>
                {dialogItem}
            </ul>
            <ul className={style.message}>
                {messageItem}
            </ul>
            <div>
                <textarea className={style.dialogInput} ref={newMessage}></textarea>
                <button className={style.dialogButton} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}
export default DialogList;