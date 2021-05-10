import React from 'react';
import { addMessageActionCreator, changeMessageActionCreator } from '../redux/dialogs_reduce.js'
import DialogList from './DialogList.jsx';

const DialogListContainer = (props) => {
    let state = props.store.getState();
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());

    }
    const updateMessage = (message) => {
        props.store.dispatch(changeMessageActionCreator(message));
    }
    return (
        <DialogList addNewMessage={addMessage} changeMessage={updateMessage} newMessage={state.dialogs.newMessage}
            messages={state.dialogs.messageData} dialogs={state.dialogs.dialogData} />
    );
}
export default DialogListContainer;