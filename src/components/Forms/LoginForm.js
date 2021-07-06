import { Field, reduxForm } from 'redux-form';
import { maxLength, required, InputField } from './FormControls';

const maxLengthLogin = maxLength(35);

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="Login" type="text" component={InputField} validate={[required, maxLengthLogin]} />
            <Field name="password" placeholder="Password" type="password" component={InputField} validate={[required, maxLengthLogin]} />
            <span><Field type="checkbox" component="input" name="rememberMe" />remember me</span>
            <button>Login</button>
        </form>
    )
}
export default reduxForm({ form: 'login' })(LoginForm)