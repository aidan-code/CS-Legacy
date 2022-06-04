import React from 'react';
import Nav from '../Components/Navbar';
import Header from '../Components/Header';
import Dash from '../Components/Dashbanner';
import Learning from '../Components/Learn'
import Special from '../Components/Speciality';
import Footer from '../Components/Footer';
import Success from '../Components/Success';



const Home = () => {

    return ( 
        <div className="cm-sp">
        <Nav/>
        <Header/>
        <Dash/>
        <Learning />
        <Success />
        <Special/>
        <Footer/>
        </div>
     );
}
 
export default Home;