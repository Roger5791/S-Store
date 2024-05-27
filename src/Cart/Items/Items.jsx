import React from 'react'

import { GoPlusCircle } from "react-icons/go";
import img from '../../Assets/product-17-2.jpg'

const Items = () => {
  return (
    <>
    <div className="item-con">

    <div className="item-content">
        <div className="item-img">
            <img src={img} alt="" />
        </div>

        <div className="item-desc">
            <h5>Swimsuit for women</h5>
            <p>Red</p>
            <p>small</p>
            <span>$178</span>
        </div>
        </div>

        <div className="item-actions">
        <button><GoPlusCircle /></button>
        <span>5</span>
        <button><GoPlusCircle /></button>

        </div>
    </div>
    <div className="item-con">

    <div className="item-content">
        <div className="item-img">
            <img src={img} alt="" />
        </div>

        <div className="item-desc">
            <h5>Swimsuit for women</h5>
            <p>Red</p>
            <p>small</p>
            <span>$178</span>
        </div>
        </div>

        <div className="item-actions">
        <button><GoPlusCircle /></button>
        <span>5</span>
        <button><GoPlusCircle /></button>

        </div>
    </div>

    </>
  )
}

export default Items