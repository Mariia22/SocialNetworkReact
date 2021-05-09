import React from 'react';
import { addMessageActionCreator, changeMessageActionCreator } from '../redux/dialogs_reduce.js'
import style from './Dialog.module.css';
import MessageItem from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const DialogListContainer = (props) => {

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());

    }
    const updateMessage = (e) => {
        let message = e.target.value;
        props.dispatch(changeMessageActionCreator(message));
    }
    return (
        <DialogList/>
    );
}
export default DialogListContainer;