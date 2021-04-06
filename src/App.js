import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import PostList from './components/Post/PostsList';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Profile />
      <PostList />
    </div>
  );
}

export default App;
