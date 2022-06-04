import React from 'react';

import { Link } from "react-router-dom";
import mainlogo from "../images/connectskillz.svg";


const Nav = () => {
    return ( 
        
        <div>
             <div className="navbar-cont">

                <div className="logi">
                    <img src={mainlogo} alt="" />
                    <div className="menu" >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                
{/* the link section */}
                {/* <BrowserRouter> */}
                <nav>
                    <ul>
                        <li><Link to="/">FAQS</Link></li>
                        <li><Link to="/login" className="spr-btn"> Login </Link>    </li>
                    </ul>


                </nav>
                </div>
                {/* </BrowserRouter> */}
                

                </div>
        </div>
     );
}
 
export default Nav;