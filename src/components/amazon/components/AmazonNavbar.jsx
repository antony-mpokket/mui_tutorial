import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import "./AmazonNavbar.css";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/amazon">Shop</Link>
        <Link to="/amazon/cart"><ShoppingCartTwoToneIcon /></Link>
      </div>
    </div>
  )
}

export default Navbar