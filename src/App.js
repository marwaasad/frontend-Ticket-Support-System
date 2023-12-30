import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import SupportForm from './components/SupportForm';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { Card } from 'react-bootstrap';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import books2 from './components/images/books2.jpg';
import Cards from './components/MaterialCards';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <div style={{ background: `url(${books2})` }}>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12 mb-4">
              <Cards />
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 mb-4">
              <Card>
                <Card.Body>
                  <AboutUs />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-4">
              <Card>
                <Card.Body>
                  <Routes>
                  <Route path="/login" element={<Login onLogin={handleLogin} />} />
                  <Route path="/register" element={<Register onLogin={handleLogin} />} />

                    <Route
                      path="/"
                      element={
                        isAuthenticated ? <Home /> : <Navigate to="/login" />
                      }
                    />
                    <Route
                      path="/dashboard"
                      element={
                        isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
                      }
                    />
                    <Route
                      path="/create-ticket"
                      element={
                        isAuthenticated ? (
                          <SupportForm />
                        ) : (
                          <Navigate to="/login" />
                        )
                      }
                    />
                    <Route
                      path="/admin"
                      element={
                        isAuthenticated ? <Admin /> : <Navigate to="/login" />
                      }
                    />
                  </Routes>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
