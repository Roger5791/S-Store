import React, { useEffect } from "react";

import "../CSS/Cart.css";

import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";

import { AiOutlineDelete } from "react-icons/ai";

import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const Cart = ({ cartItem, setCartItem }) => {

  
  //Increase Quantity==============

  function inc(product) {
    const exist = cartItem.find((x) => {
      return x.id === product.id;
    });
    setCartItem(
      cartItem.map((item) => {
        return item.id === product.id
          ? { ...exist, quantity: exist.quantity++ + 1 }
          : item;
      })
    );
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }

  //Decrease Quantity==============

  function dec(product) {
    const exist = cartItem.find((x) => {
      return x.id === product.id;
    });
    setCartItem(
      cartItem.map((item) => {
        return item.id === product.id
          ? { ...exist, quantity: exist.quantity-- - 1 }
          : item;
      })
    );
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }
  

  //Remove Items===============

  function removecart(product) {
    const exist = cartItem.find((x) => {
      return x.id === product.id;
    });

    if (exist.quantity > 0) {
      setCartItem(
        cartItem.filter((x) => {
          return x.id !== product.id;
        })
        
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
      
    }
    
    
  }

   

  const getCart = () => {
    const FetchedcartItems = localStorage.getItem("cartItems");
    if (FetchedcartItems) {
      const parsedCartItems = JSON.parse(FetchedcartItems);

      setCartItem(parsedCartItems);
    }
  };

  useEffect(() => {
    getCart();
  }, []);
  

  //Calculate Total=================

  const totalPrice = cartItem.reduce(
    (price, product) => price + product.quantity * product.price,
    0
  );

  return (
    <section className="cart-con">
      {cartItem.length === 0 && (
        <div className="empty-cart">
          <h2>Cart Is Empty</h2>

          <Link to={"/shop"}>
            <button className="cart-shop btn btn-border">Shop Now</button>
          </Link>
        </div>
      )}

      <div className="cart-items">
        {cartItem.map((product) => {
          return (
            <div className="item-con" key={product.id}>
              <Link to={`/details/${product.id}`}>
                <div className="item-content">
                  <div className="item-img">
                    <img src={product.image} alt="" />
                  </div>

                  <div className="item-desc">
                    <h5>{product.name}</h5>
                    <p>{product.color}</p>
                    <p>{product.size}</p>
                    <span>${product.price}</span>
                  </div>
                </div>
              </Link>

              <div className="item-actions">
                <button onClick={() => dec(product)}>
                  <FiMinusCircle />
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => inc(product)}>
                  <GoPlusCircle />
                </button>
                <button
                  onClick={() => removecart(product)}
                  className="remove-cart-btn"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {cartItem.length > 0 && (
        <div className="cart-subtotal">
          <div className="cart-total">
            <div>
              <h3 className="section-title">Total</h3>

              <table className="cart-total-table">
                <tbody>
                  <tr>
                    <td>
                      <span className="cart-total-title">Subtotal</span>
                    </td>
                    <td>
                      <span className="cart-price">
                        {" "}
                        ${totalPrice.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="cart-total-title">Shipping</span>
                    </td>
                    <td>
                      <span className="cart-price">Free</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="cart-total-title">Total</span>
                    </td>
                    <td>
                      <span className="cart-total-price">
                        {" "}
                        ${totalPrice.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button className="checkout-btn">
                <SignedIn>
                  <Link to={`/checkout`}>
                    <i className="fa-solid fa-box" aria-hidden="true"></i>{" "}
                    Proceed To Checkout
                  </Link>
                </SignedIn>

                <SignedOut>
                  <Link to={`/sign-in`}>
                    <i className="fa-solid fa-box" aria-hidden="true"></i>{" "}
                    Proceed To Checkout
                  </Link>
                </SignedOut>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
