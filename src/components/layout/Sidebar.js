import React from "react";
import './Sidebar.css'; 

const Sidebar = () => (
  <aside className="sidebar">
    <nav className="nav">
      <a className='fnav' href="/">About</a>
      <a className='nav-link' href="/experience">Experience</a>
      <a className='nav-link' href="/projects">Projects</a>
      <a className='nav-link' href="/web3">Web3</a>
      <a className='nav-link' href="https://github.com/luckyswaminathan">Github</a>
      <a className='nav-link' href="https://drive.google.com/file/d/1p_cpahKoh0hIcLfgK0jwcIqcSsXa4J9A/view?usp=sharing">Resume</a>
      <a className='nav-link' href="/contact">Contact</a>
      <a className='nav-link' href="https://www.linkedin.com/in/lakshman-swaminathan-0208971b1/">LinkedIn</a>
    </nav>
  </aside>
);

export default Sidebar;
