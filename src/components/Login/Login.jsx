import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import { Redirect } from 'react-router';
import { login } from '../redux/login_reduce';

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger;
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isSetLogin) {
        <Redirect to='./profile' />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isSetLogin: state.login.isSetLogin
    }
}
export default connect(mapStateToProps, { login })(Login);