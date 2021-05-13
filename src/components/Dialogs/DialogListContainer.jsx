import { connect } from 'react-redux';
import { addMessageActionCreator, changeMessageActionCreator } from '../redux/dialogs_reduce.js'
import DialogList from './DialogList.jsx';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messageData,
        dialogs: state.dialogs.dialogData,
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