import React from "react";
import img1 from "../images/Ellipse 204 (2).svg";
import img2 from "../images/devteam.png";
import img3 from "../images/Ladies.png"
import img4 from "../images/meet.png";

import { useState } from 'react';
import Join from "./Join";



const Learning = (props) => {
//   const [buttonPopup, setButtonPopup] = useState(false);

    return (  
      <div className="digital">
      <div className="hd-txt">
          <h1>Your Digital Growth</h1>
      </div>

      {/* {<!-- THE DESCRIPTION SECTION -->} */}
      <div className="desc">
          <div className="d-img">
              <div className="imgI"> 
                  <img src={img1} alt=""/>
              </div>            
              <div className="imgII">
                  <img src={img2} alt="" />
              </div>
          </div>

          <div className="d-ctnt">
              <div className="hg-h">
                  <p>LEARN</p>
              </div>

              <div className="ctxt">
                 <h1>Designed to make learning easier for you</h1>
                 <p>With our e-learning platform, we prioritise deeper learning through intentional peer interactions and knowledge sharing. The best part is that you can create your own learning path or follow our proven process.</p>
              </div>

              {/* <button className="waiting" onClick={() => setButtonPopup(true)}>Join the Waiting list</button> */}
              <Join />

          </div>
      </div>


      {/* <!-- the second one --> */}
      <div className="rev">
         

          <div className="d-ctnt">
              <div className="hg-h">
                  <p>E-WORK EXPERIENCE</p>
              </div>

              <div className="ctxt">
                 <h1>A completely immersive environment for you.</h1>
                 <p>You want the job but need to gain experience, but you don't have enough to be hired. Use our e-work feature to gain all of the experience you need to land that job.</p>
              </div>
              <Join />
          </div>

          <div className="d-img">
              <div className="img-sep ">
                  <img src={img3} alt="" />
              </div>
          </div>
      </div>


      {/* <!-- the third one --> */}
      <div className="desc">
          <div className="d-img">
              <div className="img-sep ">
                  <img src={img4} alt=""/>
              </div>
          </div>

          <div className="d-ctnt">
              <div className="hg-h">
                  <p>RECOGNITION</p>
              </div>

              <div className="ctxt">
                 <h1>A badge and certification system designed with you in mind.</h1>
                 <p>We seamlessly award badges and certifications to track your progress and achievements</p>
              </div>

              <Join />
          </div>

         
      </div>

  </div>
    );
}
 
export default Learning;