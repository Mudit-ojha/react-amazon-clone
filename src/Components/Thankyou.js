import React from 'react';
import './Thankyou.css';
import { Link } from 'react-router-dom';

function Thankyou() {
  return (
    <div className='order__confirm'>
        <h1>Hello Mudit Ojha</h1>
        <h2>Thank you for your order</h2>
        <h3>Your Order Number is : 101010</h3>
        <h4>Order Total :$2400</h4>
        <Link to="/">
        <button>Continue Shpping</button>
        </Link>
    </div>
  )
}

export default Thankyou