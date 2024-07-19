import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {
  return (
    <>
      <Router>
        <Header />
      <Routes>
        <Route path="./pages/home/Home.jsx" element={<Home />} />
        <Route path="./pages/about/About.jsx" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
