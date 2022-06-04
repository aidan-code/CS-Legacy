import React from "react";
import bann from "../images/Group 297.png";

// import { useState } from 'react';
import Join from "./Join";
// import { Link } from "react-router-dom";
// import Nav from "./Navbar";

const Header = () => {
    // const [buttonPopup, setButtonPopup] = useState(false);
  
   
        // useEffect(()=>{
    //     setTimeout(()=>{
    //         setButtonPopup(true)    
    //     }, 3000);
    // }, [])
   
    return ( 
        <div className="box">

            {/* <!-- First section --> */}

            <div className="container-vision">
                <div className="cont-vision">
                    <div className="cont-success">
                        <h2>Your Success, Our Vision</h2>
                        <p>With our LMS we make your success attainable through a well structured learning pathway and
                            training from the best SME's in your desired field</p>

                    
                     {/* <button className="waiting" onClick={() => setButtonPopup(true)}>Join the Waiting list</button> */}
                     <Join/>
                    </div>

                    <div className="img-group">
                        <img src={bann} alt="" />
                    </div>
                </div>
            </div>
           
        </div>
        
     );
}
 
export default Header;