import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/navbar';
import Sign from './components/Sign';
import Login from './components/Login';
import Profil from './components/profil';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <div className="App">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="route">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign" element={<Sign/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/profil" element={isAuthenticated ? <Profil /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
