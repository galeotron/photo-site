import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import SessionsPage from './pages/SessionsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/sessions" element={<SessionsPage/>} exact />
        <Route path="/contact" element={<ContactPage/>} exact />
        <Route path="/about" element={<AboutPage/>} exact />
        <Route path="/portfolio" element={<PortfolioPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
