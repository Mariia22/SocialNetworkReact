import Header from './components/Header';
import Post from './components/Post';
import Profile from './components/Profile';
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
