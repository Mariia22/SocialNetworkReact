import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required, TextareaField } from './FormControls';

const maxLengthMessage = maxLength(120);
const AddNewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextareaField} name="newMessageText" validate={[required, maxLengthMessage]} />
            <button>Send message</button>
        </form>
    )
}

export default reduxForm({ form: "newMessage" })(AddNewMessage);