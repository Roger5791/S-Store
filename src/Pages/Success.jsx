import React from 'react'

import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="cart-con">
     
    <div className="empty-cart">
      <h2>Order Placed</h2>

      <Link to={"/shop"}>
        <button className="cart-shop btn btn-border">Shop More</button>
      </Link>
<br />
      <Link to={"/account"}>
        <button className="cart-shop btn btn-border">View Orders</button>
      </Link>
    </div>

    </section>
  )
}

export default Success