import { Field, reduxForm } from 'redux-form';
import { maxLength, required, InputField } from './FormControls';
import style from './Form.module.css'

const maxLengthLogin = maxLength(35);

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="Login" type="text" component={InputField} validate={[required, maxLengthLogin]} />
            <Field name="password" placeholder="Password" type="password" component={InputField} validate={[required, maxLengthLogin]} />
            <span><Field type="checkbox" component="input" name="rememberMe" />remember me</span>
            {props.error && <div className={style.error}>{props.error}</div>}
            <button>Login</button>
        </form>
    )
}
export default reduxForm({ form: 'login' })(LoginForm)