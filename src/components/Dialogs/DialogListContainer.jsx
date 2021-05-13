import { connect } from 'react-redux';
import { addMessageActionCreator, changeMessageActionCreator } from '../redux/dialogs_reduce.js'
import DialogList from './DialogList.jsx';

/*const DialogListContainer = (props) => {
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
}*/
const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.messageData,
        messages: state.dialogs.dialogData,
        newMessage: state.dialogs.newMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(addMessageActionCreator()) },
        changeMessage: (message) => { dispatch(changeMessageActionCreator(message)) }
    }
}
const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);
export default DialogListContainer;