import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";

import { SignedIn, useUser } from "@clerk/clerk-react";
import { FaHeart } from 'react-icons/fa6';

const Dashboard = () => {

  const {  user } = useUser();

  const [orders, setOrders] =useState([])
  const [wishItem, setWishItem] =useState([])

    const getOrders = () => {
        const FetchedWishtItems = localStorage.getItem("Orders");
        if (FetchedWishtItems) {
          const parsedWishItems = JSON.parse(FetchedWishtItems);
          
          setOrders(parsedWishItems);
        }
      };

    const getWish = () => {
        const FetchedWishtItems = localStorage.getItem("wishItems");
        if (FetchedWishtItems) {
          const parsedWishItems = JSON.parse(FetchedWishtItems);
          
          setWishItem(parsedWishItems);
        }
      };

      useEffect(() => {
        getOrders()
        getWish()
      }, []);


  return (
   
    <div className="dash">
        <div className="account-title">
            <SignedIn>
            <h4>Hi, &nbsp; {user.fullName}</h4>
            </SignedIn>
        </div>
        <div className="dash-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur sed cum accusamus molestiae perspiciatis officiis rem, laboriosam ipsa sapiente, ullam totam, provident inventore? Vel, esse eveniet! A, reprehenderit aliquid Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem corrupti asperiores consectetur nihil id possimus ipsa, cupiditate eligendi accusamus atque labore aut quos harum illo ratione optio? Voluptatem, perferendis?</p>
            
        </div>

        <div className="dash-items">
        <div className="order-sec">
          <div className="order-head">
          <FaShoppingBag />
          <p>Orders</p>
          </div>
          <p>{orders.length}</p>
        </div>

        <div className="order-sec">
        <div className="order-head">
        <FaHeart />
        <p>Wishlist</p>
        </div>
        <p>{wishItem.length}</p>
      </div>
      </div>
     
    </div>
    
  )
}

export default Dashboard