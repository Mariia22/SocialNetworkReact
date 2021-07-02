import { connect } from 'react-redux';
import { addMessage } from '../redux/dialogs_reduce.js'
import DialogList from './DialogList.jsx';
import { withAuthRedirected } from './../HOC/Auth'
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messageData,
        dialogs: state.dialogs.dialogData
    }
}

export default compose(withAuthRedirected, connect(mapStateToProps, { addMessage}))(DialogList)

