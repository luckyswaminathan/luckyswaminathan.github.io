import React from "react";

import myImage from './images/koolioai.jpeg';
import dao from './images/franklindao.jpeg';
import cabrium from './images/cabrium.png';
import PICS from './images/pics.png';
import './Experience.css';
const Experience = () => (
        <div className='text'>
            <h1> 
                CEO/cofounder at <a href="https://cabrium-one.vercel.app/">Cabrium.ai</a>

                <br></br>
                <br></br>

                <div className="date-image">
            <span className="date">October 2023 - Present</span>
            <img src={cabrium} className='img'/>
                 </div>
                
                
                <br></br>
                <br></br>
                Research Committee Member at <a href="https://www.franklindao.xyz/">Franklin DAO</a>
                <br></br>
                <br></br>
                <div className="date-image">
            <span className="date">January 2024 - Present   </span>
            <img src={dao} className='img'/>
                 </div>
                
                <br></br>
                <br></br>
            Software Engineering Intern at <a href="http://koolio.ai/">koolio.ai</a>
                <br></br>
                <br></br>
                <div className="date-image">
            
            <span className="date">October 2023 - February 2024</span>
            <img src={myImage} alt="Koolio.ai Logo" className='img'/>
                 </div>
                <br></br>
                <br></br>

                
                 <br></br>
                 <br></br>
                 October 2023 - February 2024
                
                
                <br></br>
                <br></br>

                Machine Learing Research Intern at <a href="https://lugroup.yale.edu/"> Lu Group</a>
                <br></br>
                <br></br>
                <div className="date-image">
            <span className="date">April 2023 - October 2023</span>
            <img src={PICS} className='lu-img'/>
                 </div>

             </h1>
        </div>
    
)

export default Experience;