import { Field, reduxForm } from "redux-form";

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostMessage" />
            <button>Send</button>
        </form>)
}
export default reduxForm({ form: "newPost" })(AddNewPost);