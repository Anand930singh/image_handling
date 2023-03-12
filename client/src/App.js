import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Upload from './pages/Upload.js';
import Home from './pages/Home.js';
import './base.css'
function App() {
    return (
        <div className="container">
            <Router>
                <nav className="nav">
                    <div className="nav-brand">Cloudinary Demo</div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link to="/">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/upload">Upload</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                     <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;