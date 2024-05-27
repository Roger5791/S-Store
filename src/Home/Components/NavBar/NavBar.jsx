import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./NavBar.css";
import Logo from "../../../Assets/logo.jpg";
import { GrSearch } from "react-icons/gr";
import UserImg from "../../../Assets/user-placeholder.png";

import { FiMenu } from "react-icons/fi";
import { GoLaw } from "react-icons/go";

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

const NavBar = ({ cartSize, wishSize }) => {
  const clerk = useClerk();

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleClick = () => {
    const mobileBtn = document.querySelector(".mobile-nav");

    mobileBtn.classList.toggle("mobile-show");
  };

  return (
    <nav className="nav container">
      <Link to={"/"} className="nav-logo">
        <img src={Logo} alt="" className="nav-logo-img" />
      </Link>

      <div className="nav-menu" id="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"shop"} className="nav-link">
              Shop
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"about"} className="nav-link">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <SignedOut>
              <Link className="nav-link" onClick={() => clerk.openSignIn({})}>
                Account
              </Link>
            </SignedOut>

            <SignedIn>
              <Link to={"account"} className="nav-link">
                Account
              </Link>
            </SignedIn>
          </li>
        </ul>
      </div>

      <div className="header-user-actions">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search Items..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <Link to={`/search/${query}`} className="search-btn">
            <GrSearch />
          </Link>
        </div>

        <Link to={"wishlist"} className="header-user-action-btn">
          <FaRegHeart />
          <span className="count">{wishSize}</span>
        </Link>

        <Link to={"cart"} className="header-user-action-btn">
          <FiShoppingCart />
          <span className="count">{cartSize}</span>
        </Link>

        <Link className="header-user-action-btn">
          <UserButton>
            <UserButton.UserProfilePage
              label="Terms"
              labelIcon={<GoLaw />}
              url="terms"
            >
              <div>
                <h1>Custom Terms Page</h1>
                <br />
                <p>
                  AGREEMENT TO TERMS These Terms and Conditions constitute a
                  legally binding agreement made between you, whether personally
                  or on behalf of an entity 'S-Store' concerning your access to
                  and use of the 'S-Store.com' website as well as any other
                  media form, media channel, mobile website or mobile
                  application related, linked, or otherwise connected.
                </p>{" "}
                <br />
                <p>
                  You agree that by accessing the Site, you have read,
                  understood, and agree to be bound by all of these Terms and
                  Conditions. If you do not agree with all of these Terms and
                  Conditions, then you are expressly prohibited from using the
                  Site and you must discontinue use immediately.
                </p>{" "}
                <br />
                <p>
                  Supplemental terms and conditions or documents that may be
                  posted on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms and Conditions at any time and for any reason.
                </p>{" "}
                <br />
                <p>
                  We will alert you about any changes by updating the “Last
                  updated” date of these Terms and Conditions, and you waive any
                  right to receive specific notice of each such change. It is
                  your responsibility to periodically review these Terms and
                  Conditions to stay informed of updates. You will be subject
                  to, and will be deemed to have been made aware of and to have
                  accepted, the changes in any revised Terms and Conditions by
                  your continued use of the Site after the date such revised
                  Terms and Conditions are posted.
                </p>{" "}
                <br />
                <p>
                  {" "}
                  The information provided on the Site is not intended for
                  distribution to or use by any person or entity in any
                  jurisdiction or country where such distribution or use would
                  be contrary to law or regulation or which would subject us to
                  any registration requirement within such jurisdiction or
                  country.
                </p>{" "}
                <br />
                <p>
                  Accordingly, those persons who choose to access the Site from
                  other locations do so on their own initiative and are solely
                  responsible for compliance with local laws, if and to the
                  extent local laws are applicable.
                </p>{" "}
                <br />
              </div>
            </UserButton.UserProfilePage>
          </UserButton>

          <SignedOut>
            <img
              src={UserImg}
              alt=""
              width={28}
              onClick={() => clerk.openSignIn({})}
            />
          </SignedOut>
        </Link>

        <div
          className="header-action-btn nav-toggle"
          id="navToggle"
          onClick={handleClick}
        >
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
