import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import PostListContainer from './components/Post/PostsListContainer';
import FriendContainer from './components/Profile/Friend/FriendContainer';
import DialogListContainer from './components/Dialogs/DialogListContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <div className="app_wrapper_content">
          <Route path='/profile/' render={() => <PostListContainer store={props.store} />} />
          <Route path='/users' render={() => <FriendContainer store={props.store} />} />
          <Route path='/dialog' render={() => <DialogListContainer store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
