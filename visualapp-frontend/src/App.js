import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
// import Aboutus from './components/Header/About';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* <Route path="/about" element={<Aboutus />} /> */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
