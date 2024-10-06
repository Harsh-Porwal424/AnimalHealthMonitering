import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login state
  };

  return (
    <Router>
      <div className="App yellow-theme">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FmmmScreenshot_2024-10-06_at_9.42.31a%CC%82__PM-transformed-removebg-preview.png?alt=media&token=4e8080e9-4eda-424d-9ea1-d35e003c6915"
                alt="Animal Health Logo"
                className="logo-image"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/#about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/#features">Features</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/#pricing">Pricing</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/#gallery">Gallery</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/#team">Team</Link></li>
                {/* Conditional rendering of Login/Logout */}
                <li className="nav-item">
                  <Link className="btn btn-login" to="/login" onClick={handleLoginLogout}>
                    {isLoggedIn ? "Logout" : "Login"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;