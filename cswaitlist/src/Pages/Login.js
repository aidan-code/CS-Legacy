import React from 'react';
import viewit from "../Indicon/view.svg";
import { useState } from 'react';


const Login = () => {

    return ( 
    <div className="mainspace">
        
            <div className="poss">
                <img src="./w-icon/connectskillz 1.svg" alt="" className="logo-lg"/>
                <div className="login-1">
                
                    <div className="log_case">
        {/* <!-- the header for the form --> */}
                        <div className="log-ctnt">
                            <h1>LOG IN TO YOUR DASHBOARD</h1>
                            <p>Stay updated and learn continuously</p>
                        </div>
        {/* <!-- the login form --> */}
                        <form action="" className="lg-form">
                            <div className="mail-log">
                                <input type="email" placeholder="Email Address"/>
                            </div>
                            <div className="pass-log">
                                <input type="password" placeholder="Password" name="view" />
                                <img src={viewit} alt="viewit"/>
                            </div>
                            <p className="forget"><a href="#">Forgot password?</a></p>
                            <button className="login-btn">Join</button>
                        </form>
                    </div>
                </div>
        
            </div>
        
            <div className="banner1">
                
            </div>
        </div>
     );
}
 
export default Login;