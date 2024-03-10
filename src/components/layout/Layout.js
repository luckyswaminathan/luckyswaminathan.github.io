import React from "react";
import Sidebar from "./Sidebar";  
import './Layout.css'; 

const Layout = ({ children }) => (
    <div className="layout">
      <Sidebar />
      <div className="main-container">
        <header className="header">
          Lakshman Swaminathan
        </header>
        <main className='content'>{children}</main>
      </div>
    </div>
);

export default Layout;
