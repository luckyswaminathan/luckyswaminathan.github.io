import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './components/pages/Home';
import Layout from './components/layout/Layout';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">

      <Layout>
        <Home />
      </Layout>

    </div>
  );
}

export default App;
