import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { withRouter } from 'react-router';
import HeaderContainer from './components/Header/HeaderContainer';
import PostListContainer from './components/Post/PostsListContainer';
import FriendContainer from './components/Friend/FriendContainer';
import DialogListContainer from './components/Dialogs/DialogListContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import './App.css';
import Preload from './components/Common/Preload';
import { getAuth } from './components/redux/login_reduce';
import { compose } from 'redux';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.getAuth();
  }
  render() {
    if (!this.props.initialized) {
      <Preload />
    }
    return (
      <BrowserRouter>
        <div className="app_wrapper">
          <HeaderContainer store={this.props.store} />
          <div className="app_wrapper_content">
            <Route path='/profile/:userId?' render={() => <PostListContainer store={this.props.store} />} />
            <Route path='/users' render={() => <FriendContainer store={this.props.store} />} />
            <Route path='/dialog' render={() => <DialogListContainer store={this.props.store} />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' component={Login} />
          </div>
        </div>
      </BrowserRouter >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
export default compose(withRouter, connect(mapStateToProps, { getAuth }))(App);
