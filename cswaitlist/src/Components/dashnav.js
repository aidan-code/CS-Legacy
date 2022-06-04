import React from 'react';
import { Link } from "react-router-dom";
import mainlogo from "../images/connectskillz.svg";


const dashnav = () => {
    return (
        <header className="dsh">
        <nav>
            <div className="cs-logo">
                <img src={mainlogo} alt="logo" className="logo1" />
                
                <div className="menu" onclick="">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
           
            <div className="hd-nav">
                <ul>
                    <li className="dg-a"> <a href="">Overview</a> </li>
                    <li className="dg-b"> <a href="">Refer a Friend</a></li>
                    <li className="dg-c"><a href="">Logout</a></li>
                </ul>
            </div>
            
        </nav>
    </header>
      );
}
 
export default dashnav;