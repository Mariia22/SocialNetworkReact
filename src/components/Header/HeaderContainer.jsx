import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from './../redux/login_reduce';

class HeaderContainer extends React.Component {
    render() {
        return <Header login={this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        isSetLogin: state.login.isSetLogin,
    }
}
export default connect(mapStateToProps, { logout })(HeaderContainer);