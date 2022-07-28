import React from 'react';
import logo from "../assets/images/logoimg.png";
import './footer.css'

const Footer = () => {
  return (
    <div className='main-foota'>
    <div className='logo-foota'>
      <img src={logo} alt="logoImage" className="logo-img" />
    </div>
    </div>
  )
}

export default Footer;
