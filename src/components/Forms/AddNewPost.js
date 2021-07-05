import { Field, reduxForm } from "redux-form";
import { TextareaField, maxLength, required } from "./FormControls";


const maxLengthTextarea = maxLength(120);
const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextareaField} name="newPostMessage" validate={[required, maxLengthTextarea]} />
            <button>Send post</button>
        </form>)
}
export default reduxForm({ form: "newPost" })(AddNewPost);