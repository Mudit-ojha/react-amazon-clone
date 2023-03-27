import React from 'react'
import { Input } from '@mui/material';
import './Proceed.css';
import { Link } from 'react-router-dom'; 


function Proceed() {
  return (

      <div className='proceed_wrap'>
        <h2>Shipping Details</h2>
        <br />
        <form >
        <div className='proceed_form'>
            <div className="proceed__column">
                <label>First Name*</label>
                <Input required name="firstname"/>
            </div>
            <div className="proceed__column">
                <label>Last Name*</label>
                <Input required name="lastname"/>
            </div>
            <div className="proceed__column">
                <label>Address*</label>
                <Input required name="address"/>
            </div>
            <div className="proceed__column">
                <label>Email*</label>
                <Input required name="email"/>
            </div>
            <div className="proceed__column">
                <label>City*</label>
                <Input required name="city"/>
            </div>
            <div className="proceed__column">
                <label>Zipcode*</label>
                <Input required name="zipcode"/>
            </div>
            <div className="proceed__column">
                <label>Shipping Country*</label>
                <select name="country" id="">
                    <option>India</option>
                </select>
            </div>
            <div className="proceed__column">
                <label>Shipping Country*</label>
                <select name="subdivision" id="">
                    <option>Delhi</option>
                </select>
            </div>
            <Link to='/Thankyou'>
            <div className="proceed__column">
                <label>&nbsp;</label>
                <button>Pay Now</button>
            </div>
            </Link>
            </div>

            
        </form>
    </div>
    
  )
}

export default Proceed