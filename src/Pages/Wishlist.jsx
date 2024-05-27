import React, { useEffect, useState } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Wishlist = ({ wishItem, setWishItem }) => {
  //Remove Items===============

  const removeItem = (product) => {
    const exist = wishItem.find((x) => {
      return x.id === product.id;
    });

    if (exist.quantity > 0) {
      setWishItem(
        wishItem.filter((x) => {
          return x.id !== product.id;
        })
      );

      toast.error("Item Removed");
      
    }
  };

  localStorage.setItem("wishItems", JSON.stringify(wishItem));

  return (
    <section className="section">
      {wishItem.length === 0 && (
        <div className="empty-cart">
          <h2>Wishlist is Empty</h2>

          <Link to={"/shop"}>
            <button className="cart-shop btn btn-border">Shop Now</button>
          </Link>
        </div>
      )}

      <div className="product-wrapper">
        {wishItem.map((product) => {
          return (
            <div className="product-item" key={product.id}>
              <div className="product-banner">
                <Link to={`/details/${product.id}`} className="product-image">
                  <img
                    src={product.image}
                    alt=""
                    className="product-img default"
                  />

                  <img
                    src={product.imageAlt}
                    alt=""
                    className="product-img hover"
                  />
                </Link>

                <div className="product-actions">
                  <Link
                    to={`/details/${product.id}`}
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
                    product.tag === "Hot"
                      ? "light-red product-badge"
                      : "product-badge light-blue"
                  }
                >
                  {product.tag}
                </div>
              </div>

              <div className="product-content">
                <Link
                  to={`/details/${product.id}`}
                  className="product-category"
                >
                  {product.type}
                </Link>
                <Link to={`/details/${product.id}`}>
                  <h3 className="product-title">{product.name}</h3>
                </Link>
                <Link to={`/details/${product.id}`} className="product-rating">
                  <p>{product.rating}</p>
                  <span>
                    <BsStarFill />
                  </span>
                </Link>

                <Link to={`/details/${product.id}`} className="product-price">
                  <span className="new-price">${product.price}</span>
                  <span className="old-price">${product.oldPrice}</span>
                </Link>

                <button
                  type="button"
                  className="action-btn cart-btn wish-btn"
                  onClick={() => removeItem(product)}
                  id="cartBtn"
                  aria-label="Remove"
                >
                  <FaRegHeart />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wishlist;
