import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";



const Header = () => {
  const { signOut } = useClerk();
  const clerk = useClerk()
  return (
    <div className="header-top">
      <div className="header-container container">
        <div className="header-contact">
          <span>(+49)&nbsp; 691-234-5678</span>
          <a href="#bottom">
            <span>Our location</span>
          </a>
        </div>

        <p className="header-news">Super Value Deals - Save more with offers</p>
        <SignedOut>
          <Link onClick={() => clerk.openSignIn({})} className="header-top-login">
            Login / Sign Up
          </Link>
        </SignedOut>

        <SignedIn>
        <Link className="header-top-login" onClick={() => {signOut({ redirectUrl: '/' }); localStorage.clear()}}>Logout</Link>
        </SignedIn>

      </div>
    </div>
  );
};

export default Header;
