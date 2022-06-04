import React from "react";
import ecl from "../images/vector010.svg";
import dashs from "../images/dashboard1.svg";
import ecl2 from "../images/vector020.svg";

const Dash = () => {
    return ( 
        <div>
            <div className="dashboard-sect">

                  <div className="ecl">
                    <img src={ecl} alt="vector" />
                  </div>

                  <div className="Eclipse1">
                      <img src={dashs} alt="dashboard"/>
                  </div>

                  <div className="ecl">
                    <img src={ecl2} alt="vector" />
                  </div>

              </div>

        </div>
     );
}
 
export default Dash;