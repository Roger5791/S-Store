import React from "react";
import { useState } from "react";

import "./ProductCard.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";

import { productData } from "../../../Data/Data";
import { Link } from "react-router-dom";

const ProductCard = ({ addToWishlist, wishItem, setWishItem }) => {
  const [activeButton, setActiveButton] = useState("Featured");

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  const filterItems = productData.filter(
    (item) => item.category === activeButton
  );

  const [toggleHeart, setToggleHeart] = useState([]);



  return (
    <div>

    
      <div className="filter-buttons">
        <button
          className={activeButton === "Featured" ? "active" : ""}
          onClick={() => handleFilterChange("Featured")}
        >
          Featured
        </button>

        <button
          className={activeButton === "Popular" ? "active" : ""}
          onClick={() => handleFilterChange("Popular")}
        >
          Popular
        </button>

        <button
          className={activeButton === "New Arrivals" ? "active" : ""}
          onClick={() => handleFilterChange("New Arrivals")}
        >
          New Arrivals
        </button>
      </div>

      <div className="section product-wrapper">
        {filterItems.map((item, id) => {
        
          return (
            <div className="product-item" key={id}>
              <div className="product-banner">
                <Link to={`details/${item.id}`} className="product-image">
                  <img
                    src={item.image}
                    alt=""
                    className="product-img default"
                  />

                  <img
                    src={item.imageAlt}
                    alt=""
                    className="product-img hover"
                  />
                </Link>

                <div className="product-actions">
                  <Link
                    to={`details/${item.id}`}
                    className="action-btn"
                    aria-label="Quick View"
                  >
                    <FaEye />
                  </Link>

                  <a className="action-btn" aria-label="Compare">
                    <LuGitCompare />
                  </a>
                </div>

                <div
                  className={
                    item.tag === "Hot"
                      ? "light-red product-badge"
                      : "product-badge light-blue"
                  }
                >
                  {item.tag}
                </div>
              </div>

              <div className="product-content">
                <Link to={`details/${item.id}`} className="product-category">
                  {item.type}
                </Link>
                <Link to={`details/${item.id}`}>
                  <h3 className="product-title">{item.name}</h3>
                </Link>
                <Link to={`details/${item.id}`} className="product-rating">
                  <p>{item.rating}</p>
                  <span>
                    <BsStarFill />
                  </span>
                </Link>

                <Link to={`details/${item.id}`} className="product-price">
                  <span className="new-price">${item.price}</span>
                  <span className="old-price">${item.oldPrice}</span>
                </Link>

                <button
      type="button"
      className={`action-btn cart-btn ${toggleHeart.includes(item.id) ? "wish-btn" : ""
    } `}
      onClick={() => {
        addToWishlist(item);
        setToggleHeart((b) => [...toggleHeart, item.id]);

      }}
      aria-label={`${toggleHeart.includes(item.id) ? 'Remove' :'Add to Wishlist'}`}
    >
      <FaRegHeart />
    </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
