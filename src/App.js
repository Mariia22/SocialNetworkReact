import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import PostList from './components/Post/PostsList';
import Profile from './components/Profile/Profile';
import DialogList from './components/Dialogs/DialogList';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Profile />
        <div className="app_wrapper_content">
          <Route path='/profile' component={PostList} />
          <Route path='/dialog' component={DialogList} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
