import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import setLogin from './../redux/login_reduce';

class HeaderContainer extends ReactComponent {
    render() {
        return (
            <Header />
        )
    }
}

export default connect(mapStateToProps, { setLogin })(HeaderContainer);