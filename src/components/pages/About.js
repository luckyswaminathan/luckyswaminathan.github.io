import React from 'react';

import myImage from './images/headshot.png';
import './About.css';
const About = () => (
  <div className='text'>
    <h1> Hello! My name is Lakshman, and I am a current Sophomore studying Computer Information Science at Penn
        <br></br>
        <br></br>

        This is me:
        <br></br>
        <br></br>
        <img src={myImage} className='img'/>
        <br></br>
        <br></br>
        I am 20 years old, and I hail from Pleasanton, California

        <br></br>
        <br></br>

        My primary interests lie in the fields of Entrepreneurship, AI, and Blockchain(check out the web3 page!)

        <br></br>
        <br></br>

        I am an avid traveller! I am taking a gap year next year to work/travel, and I love to meet new people



        <br></br>
        <br></br>

        I am currently a student at the University of Pennsylvania
        
        <br></br> 
        <br></br>
        I am heavily involved in Penn Blockchain, FranklinDAO, and Sigma Eta Pi, the entrepreneurship fraternity

        
    </h1>
  </div>
);

export default About;