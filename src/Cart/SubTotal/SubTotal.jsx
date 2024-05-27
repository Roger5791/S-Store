import React from 'react'

const SubTotal = () => {
  return (
    <section className='cart-total'>
 
    <div>
    <h3 className="section-title">Total</h3>

    <table className="cart-total-table">
      <tbody><tr>
        <td><span className="cart-total-title">Subtotal</span></td>
        <td><span className="cart-price">$250.00</span></td>
      </tr>
      <tr>
        <td><span className="cart-total-title">Shipping</span></td>
        <td><span className="cart-price">$20.00</span></td>
      </tr>
      <tr>
        <td><span className="cart-total-title">Total</span></td>
        <td><span className="cart-total-price">$270.00</span></td>
      </tr>
    </tbody></table>

    <button href="checkout.html" className="checkout-btn">
      <i className="fa-solid fa-box" aria-hidden="true"></i> Proceed To Checkout
    </button>
    </div>

    </section>
  )
}

export default SubTotal