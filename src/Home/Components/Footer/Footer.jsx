import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'

import PayLogo from '../../../Assets/payment-method.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="sectin">
    <div className="footer-container grid">
      <div className="footer-content">
        

          <h4 className="footer-sub">Contact</h4>

          <p className="footer-description">
            <span>Address: &nbsp;</span>18 Krielower Weg,<br />Neukölln, Berlin, 12355
          </p>

          <p className="footer-description">
            <span>Phone: &nbsp;</span> (+49)&nbsp; 691-234-5678 / <br />(+91)&nbsp; 01-2365-6985
          </p>

          <p className="footer-description">
            <span>Hours: &nbsp;</span> 10:00 - 18:00, Mon - Sat
          </p>

          <div className="footer-social">
            <h4 className="footer-sub">Follow us</h4>

            <div className="footer-social-links">
                <Link className='footer-social-icon'><FaFacebook /></Link>
                <Link className='footer-social-icon'><FaInstagram /></Link>
                <Link className='footer-social-icon'><FaTwitter /></Link>
                <Link to={'https://github.com/Roger5791'} target='_blank' className='footer-social-icon'><FaGithub /></Link>
            </div>
          </div>

      </div>

      <div className="footer-content">
        <h3 className="footer-title" id="bottom" name="bottom">Useful Links</h3>

        <ul className="footer-links">
          <li><Link className="footer-link">About Us</Link></li>
          <li><Link className="footer-link">Delivery Information</Link></li>
          <li><Link className="footer-link">Privacy Policy</Link></li>
          <li><Link className="footer-link">Terms &amp; Conditions</Link></li>
          <li><Link className="footer-link">Contact Us</Link></li>
          <li><Link className="footer-link">Support Center</Link></li>
        </ul>

      </div>

      <div className="footer-content">
        <h3 className="footer-title">My Account</h3>

        <ul className="footer-links">
          <li><Link to={'login'} className="footer-link">Sign In</Link></li>
          <li><Link to={'cart'} className="footer-link">View Cart</Link></li>
          <li><Link to={'wishlist'} className="footer-link">My Wishlist</Link></li>
          <li><Link to={'account'} className="footer-link">Track My Order</Link></li>
          <li><Link className="footer-link">Help</Link></li>
          <li><Link to={'account'} className="footer-link">Orders</Link></li>
        </ul>

      </div>

      <div className="footer-content">
        <h3 className="footer-title">Secured Payment Gateways</h3>

        <img src={PayLogo} alt="" className="payment-img" />
      </div>

    </div>

    <div className="footer-bottom">
      <p className="copyright">© 2023 &nbsp; S-shop. &nbsp; All rights reserved</p>
      <p><Link to={'/'} className="designer">Back to Top</Link></p>
      <Link to={'https://github.com/Roger5791'} target='_blank'><span className="designer">Designed by Saurav Antony</span></Link>
      
    </div>

  </footer>
  )
}

export default Footer