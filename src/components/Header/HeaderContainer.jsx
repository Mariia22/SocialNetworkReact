import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setLogin, getLogin } from './../redux/login_reduce';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setLogin(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { login, password, email } = response.data.data;
                    this.props.getLogin(login, password, email);
                    this.props.setLogin(true);
                }

            })
    }
    render() {
        return <Header login={this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login.login,
        password: state.login.password,
        email: state.login.email,
        isSetLogin: state.login.isSetLogin,
    }
}
export default connect(mapStateToProps, { setLogin, getLogin })(HeaderContainer);