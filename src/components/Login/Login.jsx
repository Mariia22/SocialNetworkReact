import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import { Redirect } from 'react-router';
import { login } from '../redux/login_reduce';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isSetLogin) {
        return <Redirect to={'./profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}
                captchaUrl={props.captchaUrl} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isSetLogin: state.login.isSetLogin,
        captchaUrl: state.login.captchaUrl
    }
}
export default connect(mapStateToProps, { login })(Login);