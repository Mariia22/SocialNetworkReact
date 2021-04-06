import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import PostList from './components/Post/PostsList';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialogs/Dialog';
import './App.css';

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Profile />
      <div className="app_wrapper_content">
        <PostList />
        {/*<Dialog />*/}
      </div>
    </div>
  );
}

export default App;
