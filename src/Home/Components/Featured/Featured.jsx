import React, { useState } from 'react'
import { productData } from '../../../Data/Data'
import { Link } from 'react-router-dom'

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const breakpoints ={
    1280: {
        slidesPerView:4,
        spaceBetweenSlides:30
    },

    1024: {
        slidesPerView:3,
        spaceBetweenSlides:30
    },

    768: {
        slidesPerView:2,
        spaceBetweenSlides:40
    },

    480: {
        slidesPerView:1,
        spaceBetweenSlides:10
    },

    0: {
        slidesPerView:1,
        spaceBetweenSlides:0
    }
}


const Featured = ({addToWishlist}) => {

  
  const [toggleHeart, setToggleHeart] = useState([]);


  return (
    <div className='featured-con section'>

    <div className='title-head'>
    <h3 className='sub-title'>Trending <span className='sub-title-alt'>Products</span></h3>
    <div className="button-prev-slide slideP-2">
    <GrFormPrevious/>
 </div>
 <div className="button-next-slide slideN-2">
    <GrFormNext/>
 </div>
 </div>


    <Swiper className='swiper'
    spaceBetween={20} loop={true}
    slidesPerView={4} breakpoints={breakpoints} modules={[Navigation, Autoplay]} autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}  navigation={
        { prevEl:'.slideP-2',
         nextEl:'.slideN-2'}
     } 
 
  >

  <div className='featured-wrapper'>
    {productData.map((item, id)=> {
      return (
        <SwiperSlide  key={id}>
        <div className="product-item trending-item">
        <div className="product-banner">
          <Link to={`details/${item.id}`} className="product-image"><img src={item.image} alt="" className="product-img default" />

          <img src={item.imageAlt} alt="" className="product-img hover" />
          </Link>

          <div className="product-actions">
            
            <Link to={`details/${item.id}`} className="action-btn" aria-label="Quick View"><FaEye /  >
            </Link>


            <a className="action-btn" aria-label="Compare"><LuGitCompare />
            </a>

          </div>

          <div className={item.tag === 'Hot' ? 'light-red product-badge' : 'product-badge light-blue'}>{item.tag}</div>

        </div>

        <div className="product-content">
        <Link to={`details/${item.id}`} className="product-category">{item.type}</Link>
        <Link to={`details/${item.id}`}>
          <h3 className="product-title">{item.name}</h3>
      </Link>
      <Link to={`details/${item.id}`} className="product-rating">
        <p>{item.rating}</p>
        <span><BsStarFill /></span>
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
      </SwiperSlide>
      )
    })}
    </div>

   </Swiper>
        
              </div>
  )
}

export default Featured