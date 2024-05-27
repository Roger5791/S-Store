import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { GoLaw } from 'react-icons/go';
import { FaX } from 'react-icons/fa6';

const MobileNav = () => {

  const handleClick = () => {
    const mobileBtn = document.querySelector('.mobile-nav');
  
    mobileBtn.classList.toggle('mobile-show')
  
  }
    const clerk = useClerk()
  return (
    <div className='home-container'>
    
    <div className="mobile-nav">
    <ul className="nav-list">
    <li className="nav-item">
      <NavLink to={"/"} onClick={handleClick} className="nav-link">
        Home
      </NavLink>
    </li>

    <li className="nav-item">
      <NavLink to={"shop"} onClick={handleClick} className="nav-link">
        Shop
      </NavLink>
    </li>

    <li className="nav-item">
      <NavLink to={"about"} onClick={handleClick} className="nav-link">
        About
      </NavLink>
    </li>

    <li className="nav-item">
    <SignedOut>
 
      <Link to={'sign-in'} className="nav-link"  onClick={handleClick} >
        Account
      </Link>

      </SignedOut>

      <SignedIn>
      <Link to={'account'} onClick={handleClick} className="nav-link"  >
      Account
    </Link>
      </SignedIn>

    </li>

   
  </ul>

  <span className="close-icon" onClick={handleClick}><FaX></FaX></span>
  
    </div> 
    
    </div>
  )
}

export default MobileNav