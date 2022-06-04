import React from 'react';
import lastimg from "../images/vector010.svg";
import icon1 from "../Indicon/Vector.svg";
import icon2 from "../Indicon/flexi.svg";
import icon3 from "../Indicon/Ease.svg"
import Join from './Join';


const Special = () => {

    return (
        <div class="cased">
        <div class="spec">

            <div class="spec-hd">
                <h1>Our special features for you</h1>
                <p>We provide various special features for you</p>
            </div>
    
            <div class="sp-sec">
                <div class="specs">
                    <div class="specicon">
                        <img src={icon1} alt="" />
                    </div>
                    <div class="spc-txt">
                        <h3>Best tutors</h3>
                        <p>We provide various special features for you</p>
                    </div>
                </div>
        
                {/* <!-- 02 --> */}
                <div class="specs">
                    <div class="specicon">
                        <img src={icon2} alt="" />
                    </div>
                    <div class="spc-txt">
                        <h3>Best tutors</h3>
                        <p>We provide various special features for you</p>
                    </div>
                </div>
        
                {/* <!-- 03 --> */}
                 <div class="specs">
                    <div class="specicon">
                        <img src={icon3} alt="" />
                    </div>
                    <div class="spc-txt">
                        <h3>Best tutors</h3>
                        <p>We provide various special features for you</p>
                    </div>
                </div>
        
                {/* <!-- 04 --> */}
                <div class="specs">
                    <div class="specicon">
                        <img src={icon1} alt="" />
                    </div>
                    <div class="spc-txt">
                        <h3>Best tutors</h3>
                        <p>We provide various special features for you</p>
                    </div>
                </div>
        
                {/* <!-- 05 -->  */}
                <div class="specs">
                    <div class="specicon">
                        <img src={icon1} alt="" />
                    </div>
                    <div class="spc-txt">
                        <h3>Best tutors</h3>
                        <p>We provide various special features for you</p>
                    </div>
                </div>
            </div>
           
            <Join/>
           
        </div>
        <div class="imds">
            <img src={lastimg} alt=""/>
            
        </div>
        </div>
      );
}
 
export default Special;