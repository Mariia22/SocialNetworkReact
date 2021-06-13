import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setLogin, getLogin } from './../redux/login_reduce';
import { authAPI } from './../API/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setLogin(false);
        authAPI.getAuth().then(response => {
                if (response.resultCode === 0) {
                    let { login, email } = response.data;
                    this.props.getLogin(login, email);
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