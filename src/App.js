import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Profile />
      <Post />
    </div>
  );
}

export default App;
