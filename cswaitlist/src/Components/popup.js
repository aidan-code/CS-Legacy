import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState,useEffect } from "react";

const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
// the popup function! it ultimately allow the popup work.
const Popup = (props) => {

   

    const firstRef = useRef();
    const lastRef = useRef()
    const mailRef = useRef()
    const errRef = useRef();

    console.log(firstRef, lastRef,mailRef, errRef);

    const [firstName, setFirstName] = useState('');
    const [firstFocus, setFirstFocus] = useState(false);


    const [lastName, setLastName] = useState('');
    const [lastFocus, setLastFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validMail, setValidMail] = useState(false);
    const [mailFocus, setMailFocus] = useState(false);

    // error and success messages_______________________________________
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // submit form_______________________________________________________
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {firstName, lastName, email};
        console.log(userData);
    }

    useEffect(() =>{
        // userRef.current.focus();
    }, [])

    useEffect(()=>{
        setErrMsg('')
    }, [email])

    return ( props.trigger) ? (
        <div className="case-p">
            <div className="popup-inn">
           
            {/* CLOSE EBUTTON */}
            <button className="close" onClick={()=> props.setTrigger(false)}>&times;</button>

             <div className="register">
            <div className="inf">
                <h1>Register Now</h1>
                <p className="fic">You will get a firsthand access to the platform once it is launched.</p>
            </div>
            {/* Form section */}
            <form  className="entries">
        
                <input type="text" 
                 placeholder="First name" 
                 ref={firstRef}
                 autoComplete="off"
                 value={firstName}
                 required
                 onChange = {(e) => setFirstName(e.target.value)}
                 onFocus = {() => {setFirstFocus(true)}}
                 onBlur = {() => {setFirstFocus(false)}}
                />  

                <input type="text"
                 placeholder="Last name" 
                 ref = {lastRef}
                 autoComplete = "off"
                 value={lastName}
                 required
                 onChange = {(e) => setLastName(e.target.value)}
                 onFocus = {() =>{setLastFocus(true)}}
                 onBlur = {() =>{setLastFocus(false)}}
                 />

                <input type="email" 
                 placeholder="Email Address"
                 value={email}
                 required
                 ref={mailRef}
                 onChange = {(e) => setEmail(e.target.value)}


                 />
                 {/* THE INFORMATION NEEDED TO FILL IN THE EMAIL */}
                 <p id="uidnote" className={mailFocus && email && !validMail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                 <section>
                    <p ref={errRef} className = {errMsg ? "errmsg":"offscreen"} aria-live = "assertive">{errMsg}</p>
                 </section>
                <button className="reg-btn">Join</button>
                <p>{firstName} {lastName} {email}</p>
            </form>
        </div>
            </div>
            <div className="Overlay"></div>
        </div>


      ): "";
}
 
export default Popup;