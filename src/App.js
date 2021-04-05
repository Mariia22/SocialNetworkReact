import Header from './components/Header/Header';
import PostList from './components/Post/PostsList';
import Post from './components/Post/Post';
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
