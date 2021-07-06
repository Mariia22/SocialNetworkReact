import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setLogin, getAuth, logout } from './../redux/login_reduce';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setLogin(false);
        this.props.getAuth();
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
export default connect(mapStateToProps, { setLogin, getAuth, logout })(HeaderContainer);