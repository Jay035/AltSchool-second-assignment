import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
