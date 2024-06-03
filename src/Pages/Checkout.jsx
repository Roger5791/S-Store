import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../CSS/Checkout.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = ({ cartItem, setCartItem }) => {
  const [orders, setOrders] = useState([]);

  let stripePromise;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
  };

  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);


  const checkoutOptions = {
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "fgsgsg",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async (item) => {
    setOrders([...cartItem]);
    
    localStorage.setItem("Orders", JSON.stringify([...cartItem]));
    setCartItem([]);
    localStorage.removeItem("cartItems", JSON.stringify(cartItem));
    setLoading(true);
    console.log("redirectToCheckout");

    axios.post(`https://s-store-alpha.vercel.app/create-checkout-session`, {
      cartItem,
    })
    .then((response) => {
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    })
    .catch((err) => console.log(err.message));
  }
   

  

  const getOrders = () => {
    const FetchedWishtItems = localStorage.getItem("Orders");
    if (FetchedWishtItems) {
      const parsedWishItems = JSON.parse(FetchedWishtItems);

      setOrders(parsedWishItems);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const totalPrice = cartItem.reduce(
    (price, product) => price + product.quantity * product.price,
    0
  );

  return (
    <section className="section">
      <div className="checkout-container">
        <div className="checkout-group">
          <h3 className="section-title">Billing Details</h3>

          <form action="" className="form grid">
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Address"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="City"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Country"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Postal Code /  ZIP"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Email"
              required
            />

            <h3 className="checkout-title">Additional Information</h3>

            <textarea
              name=""
              placeholder="Order remarks, Instructions..."
              className="form-input textarea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>

        <div className="checkout-group">
          <h3 className="section-title">Total</h3>

          <table className="order-table">
            <tbody>
              <tr>
                <th colSpan="2">Products</th>
                <th>Total</th>
              </tr>

              {cartItem.map((item, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <img src={item.image} alt="" className="order-img" />
                    </td>

                    <td>
                      <h3 className="table-title">{item.name}</h3>
                      <p className="table-qnty">x {item.quantity}</p>
                    </td>

                    <td>
                      <span className="table-title">
                        ${item.price * item.quantity}
                      </span>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <th colSpan={2}>Total</th>
                <th> ${totalPrice}</th>
              </tr>

              <tr>
                <td colSpan={2}>Shipping fee</td>
                <td>Free</td>
              </tr>

              <tr>
                <td className="order-grandtotal" colSpan={2}>
                  Grand Total
                </td>
                <td className="order-grandtotal"> ${totalPrice}</td>
              </tr>
            </tbody>
          </table>

          <div className="payment-methods">
            <h3 className="checkout-title payment-title">Payment</h3>

            <div className="payment-option flex">
              <input type="radio" name="radio" className="payment-input" />
              <label className="payment-label">Debit / Credit Card</label>
            </div>

            <div className="payment-option flex">
              <input type="radio" name="radio" className="payment-input" />
              <label className="payment-label">Net Banking</label>
            </div>

            <div className="payment-option flex">
              <input type="radio" name="radio" className="payment-input" />
              <label className="payment-label">UPI</label>
            </div>

            <div className="payment-option flex">
              <input type="radio" name="radio" className="payment-input" />
              <label className="payment-label">PayPal</label>
            </div>
          </div>
      
            <button
              type="submit"
              className="checkout-btn"
              id="orderBtn"
              onClick={redirectToCheckout}
            >
              Place Order
            </button>
          
        </div>
      </div>
    </section>
  );
};

export default Checkout;
