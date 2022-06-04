import React from 'react';
import success from "../images/success.png"


const Success = () => {
    return ( 
        <section class="suc-s">
        <div class="d-story">
            <img src={success} alt="" class="own"/>
            <p class="quo">"</p>

            <div class="story">
                <h4>I am overjoyed to be able to share this wonderful news with you. I finally got a job as a lead PMO analyst with a major cosmetics company.</h4>
                <p> "When I joined ConnectinSkillz, I made sure to complete all of my training, joined multiple projects and discussion groups, volunteered in a variety of ways, and when I felt I was ready to send out my applications, I was able to create an industry-acceptable CV with interview practical sessions with the help of my mentor, and here I am."</p>
            </div>

            <h1>-Stephen Elvis</h1>
        </div>
    </section>
     );
}
 
export default Success;
