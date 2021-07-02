import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddNewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageText" />
            <button>Send message</button>
        </form>
    )
}

export default reduxForm({ form: "newMessage" })(AddNewMessage);