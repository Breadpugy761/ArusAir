import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import FutureTech from "./Pages/FutureTech";
import Model from "./Pages/Model";
import Breakthroughs from "./Pages/Breakthroughs";
import "./App.css"; // Import the CSS file for styling

function App() {
    return (
        <Router>
            <div className="container">
                {/* Navigation bar */}
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/future-tech">Future Tech</Link></li>
                        <li><Link to="/model">Model</Link></li>
                        <li><Link to="/breakthroughs">Breakthroughs</Link></li>
                    </ul>
                </nav>

                {/* Main content area */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/future-tech" element={<FutureTech />} />
                        <Route path="/model" element={<Model />} />
                        <Route path="/breakthroughs" element={<Breakthroughs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
