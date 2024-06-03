import React from 'react'

import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <section className="cart-con">
     
        <div className="empty-cart">
          <h2>Payment Cancelled</h2>

          <Link to={"/shop"}>
            <button className="cart-shop btn btn-border">Shop Now</button>
          </Link>
        </div>

        </section>
   
  )
}

export default Cancel