import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import PostsList from './components/PostsList';
import PostDetail from './components/PostDetail';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <div className="header">
            <h1>Advanced React Redux Blog</h1>
            <ThemeToggle />
          </div>
          <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/post/:postId" element={<PostDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;