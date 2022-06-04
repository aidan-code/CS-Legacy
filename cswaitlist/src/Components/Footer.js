import React from 'react';
import lg010 from "../Indicon/ConnectinSkillz.svg";
import lg020 from "../Indicon/connectskillz 1.svg";
import mail from "../Indicon/mailing.svg";
import callme from "../Indicon/callme.svg"


const Footer = () => {
    return ( 
        <footer>
        <div class="foot1">
            <div class="ft010">
                <div class="logos">
                    <img src={lg020} alt="" class="lgsvg"/>
                {/* <!-- <p>ConnectinSkillz</p> --> */}
                <img src={lg010} alt="" class="ftsvg"/>
                </div>
                <div class="abt">
                    <p>An E-learning platform and work experience designed for you</p>
                </div>
        
               
            </div>
            <div class="ft020">
                <div class="ct-info">
                    <img src={mail} alt=""/>
                    <a href="mailto:info@connectinskillz.org">info@connectinskillz.org</a>
                </div>

                <div class="ct-info">
                    <img src={callme}alt=""/>
                    <a href="tel:+44 (0) 3301332756">+44 (0) 3301332756</a>
                </div>
            </div>

            <nav class="eco">
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">FAQS</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>


            </nav>

        </div>
       
    </footer>
     );
}
 
export default Footer;