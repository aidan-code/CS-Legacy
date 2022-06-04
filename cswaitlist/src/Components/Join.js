import React from "react";
import {useState,} from "react"
import Popup from '../Components/popup';



const Join = (props) => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return ( 
        <div>
        <button className="waiting" onClick={() => setButtonPopup(true)}  >Join the Waiting list</button> 
        
        <Popup trigger ={buttonPopup} setTrigger = {setButtonPopup} />


        </div>
        
     );
}
 
export default Join;