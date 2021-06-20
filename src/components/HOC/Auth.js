import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToPropsRedirect = (state) => {
    return {
        login: state.login.isSetLogin
    }
}

export const withAuthRedirected = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.login) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }
    let connectedAuthRedirected = connect(mapStateToPropsRedirect)(RedirectComponent);
    return connectedAuthRedirected;
}

