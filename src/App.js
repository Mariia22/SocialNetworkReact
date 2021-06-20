import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer';
import PostListContainer from './components/Post/PostsListContainer';
import FriendContainer from './components/Friend/FriendContainer';
import DialogListContainer from './components/Dialogs/DialogListContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <HeaderContainer store={props.store} />
        <div className="app_wrapper_content">
          <Route path='/profile/:userId' render={() => <PostListContainer store={props.store} />} />
          <Route path='/users' render={() => <FriendContainer store={props.store} />} />
          <Route path='/dialog' render={() => <DialogListContainer store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
