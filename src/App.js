
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Login  from './Components/Login';
import React from 'react';
import Proceed from './Components/Proceed';
import Thankyou from './Components/Thankyou';





function App() {
  // BEM
  return (
    // BEM
  
    <Router>
        
    <div className="App">
    
      <Routes>
        <Route path="/login" element={<Login/>}/>
          
        <Route path="/checkout" element={<React.Fragment><Header/><Checkout/></React.Fragment>}/>
        <Route exact path="/Proceed" element={<React.Fragment><Header/><Proceed/></React.Fragment>}/>
        <Route exact path="/thankyou" element={<React.Fragment><Header/><Thankyou/></React.Fragment>}/>
          <Route path="/" element={<React.Fragment><Header/><Home/></React.Fragment>} />
      
        </Routes>
    </div>
    </Router>
  );
}

export default App;
