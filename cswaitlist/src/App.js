import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from "./Pages/Login";




function App() {
  return (
    <div className="App">
    
    <Router>
    {/* <Nav/> */}
      <Routes>

         <Route  path="/" element={<Home/>}  />
         <Route  path="/login" element={<Login/>} />

      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
