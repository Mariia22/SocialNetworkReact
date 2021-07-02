import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field type="text" name="Login" placeholder="Login" component="input" />
            <Field type="text" name="Password" placeholder="Password" component="input" />
            <span><Field type="checkbox" component="input" name="remember" />remember me</span>
            <button>Login</button>
        </form>
    )
}
export default reduxForm({ form: 'login' })(LoginForm)