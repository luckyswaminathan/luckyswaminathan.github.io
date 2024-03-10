import logo from './logo.svg';
import './App.css';
import React from "react";
import Layout from './components/layout/Layout';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Web3 from './components/pages/Web3';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
            
              <Routes>
                <Route path="/" element={<Layout><About /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/projects" element={<Layout><Projects /></Layout>} />
                <Route path="/experience" element={<Layout><Experience /></Layout>} />
                <Route path="/web3" element={<Layout><Web3 /></Layout>} />
              </Routes>
            
          </Router>

    </div>
  );
}

export default App;
