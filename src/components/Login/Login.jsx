import React from 'react';
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
const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)
const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
}

export default Login;