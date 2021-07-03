import { Field, reduxForm } from 'redux-form';
import { maxLength, required, InputField } from './FormControls';

const max = maxLength(4);

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" placeholder="Login" type="text" component={InputField} validate={[required, max]} />
            <Field name="password" placeholder="Password" type="password" component={InputField} validate={[required, max]} />
            <span><Field type="checkbox" component="input" name="remember" />remember me</span>
            <button>Login</button>
        </form>
    )
}
export default reduxForm({ form: 'login' })(LoginForm)