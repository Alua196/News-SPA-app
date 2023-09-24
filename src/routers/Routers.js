import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';

const Routers = () => {
  return (
    <Router> {/* Wrap your Routes component with the Router */}
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default Routers;
