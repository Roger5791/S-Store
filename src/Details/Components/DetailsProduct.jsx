import React, { useEffect, useState } from "react";
import { productData } from "../../Data/Data";
import { useParams } from "react-router-dom";

import { FaCrown } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaCreditCard } from "react-icons/fa";

import { FaEye } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


import adImage1 from '../../Assets/product-11-1.jpg'
import adImage2 from '../../Assets/product-24-1.jpg'

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import DetailsInfo from "./DetailsInfo";

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



const DetailsProduct = ({addtocart, addToWishlist}) => {
  const { productId } = useParams();
  const thisProduct = productData.find((prod) => String(prod.id) === productId);
  const filterItems = productData.filter((item) => item.category === 'Popular');
  const image1 = thisProduct.image;
  const image2 = thisProduct.imageAlt;

  const [activeImage, setActiveImage] = useState(image1);

  const [selectedColor, setSelectedColor] = useState(
    thisProduct.colors[1]
  );

  const [selectedSize, setSelectedSize] = useState(
    thisProduct.size[1]
  );

  
  const [toggleHeart, setToggleHeart] = useState([]);



  

  return (
    <section>
      <div className="details-wrapper">

       {/*========Img Gallery=========*/}

        <div className="img-section">
          <div className="product-images">
            <div className="product-small-img">
              <img
                src={image1}
                onClick={() => setActiveImage(image1)}
                alt=""
                className={`${
                  activeImage === image1 ? "active-img-border" : ""
                }`}
              />
              <img
                src={image2}
                onClick={() => setActiveImage(image2)}
                alt=""
                className={`${
                  activeImage === image2 ? "active-img-border" : ""
                }`}
              />
            </div>

            <div className="product-large-img">
              <img src={activeImage} />
            </div>
          </div>

          <div className="ads-con">
          <Link to={`/details/11`}   onClick={() => setActiveImage(adImage1)}>
         <div className="details-ads">
                <div className="ad-img">
                <img src={adImage1} alt="" />
                </div>

                <div className="ad-info">
                  <p className="ad-title">Jennys Casual T-Shirt</p>
                  <div className="ad-rating">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                  </div>
                  <div className="ad-tag">
                    <span>25% Off</span>
                    <p>Limited Time Deal</p>
                  </div>
                  <div className="ad-price">
                    <p className="price-new">$259</p>
                    <span className="price-old">$289</span>
                  </div>
                </div>

                <div className="ad-sponsor">
                <span>
                <BsInfoCircleFill />
                </span>
                <p>Sponsored</p>
                </div>

          </div>
          </Link>

          <Link to={`/details/24`} onClick={() => setActiveImage(adImage2)} >
           <div className="details-ads">
                <div className="ad-img">
                <img src={adImage2} alt="" />
                </div>

                <div className="ad-info">
                  <p className="ad-title">Woodland Formal Shoes</p>
                  <div className="ad-rating">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                  </div>
                  <div className="ad-tag">
                    <span>25% Off</span>
                    <p>Limited Time Deal</p>
                  </div>
                  <div className="ad-price">
                    <p className="price-new">$299</p>
                    <span className="price-old">$329</span>
                  </div>
                </div>
                <div className="ad-sponsor">
                <span>
                <BsInfoCircleFill />
                </span>
                <p>Sponsored</p>
                </div>
          </div>
          </Link>
          </div>

        </div>

         {/*========Info-Section=========*/}

        <div className="info-section">
          <h2>{thisProduct.name}</h2>
          <span>{thisProduct.brand}</span>

          <div className="details-price flex">
              <span className="new-price">${thisProduct.price}</span>
              <span className="old-price">${thisProduct.oldPrice}</span>
            </div>

            <p className="short-description">Faux leather is usually associated with strength, authority, and elegance; now you can achieve the same characteristics with this wide range of Faux leather jacket for men inspired by the latest trends. The highly sophisticated men Faux leather jacket features some essential and decorative details like zipper/button closure, multiple pockets, internal viscous/Fur lining etc. These Faux leather jacket men can be worn for numerous occasions including fancy dress parties, outings, trips, etc.</p>

            <ul className="product-list">
              <li className="list-item">
                <FaCrown /> 1 Year Rogue Brand Warranty
              </li>
              <li className="list-item">
                <LuRefreshCw /> 30 Days Return Policy
              </li>
              <li className="list-item">
                <FaCreditCard /> Cash on Delivery available
              </li>
            </ul>

            {/*========Colors=========*/}

            <div className="details-colors">
            {thisProduct.colors.length > 0 && (
                <div className="color-wrap">
                  <p >Color:</p>
                  <div className="color-con">
                    {thisProduct.colors.map((color, index) => (
                      <p
                        key={index}
                        className={`color-item ${
                            selectedColor === color && "color-selected"}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

             {/*========Size=========*/}

            <div className="size-con">
            <p >Size:</p>
            {thisProduct.size.map((size, index) => (
                <p
                  key={index}
                  className={`size-item ${
                    selectedSize === size && "size-selected"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </p>
              ))}
            </div>

             

              {/*========Cart=========*/}

            <div className="detail-actions">
            <input type="number" className="add-qnty" defaultValue={1} min={1}></input>
              <button  onClick={() => addtocart (thisProduct)} className="add-cart-btn">Add to Cart</button>
       
              <button className={`add-wishlist-btn ${toggleHeart.includes(thisProduct.id) ? 'wish-btn' : ''}`} onClick={() => {addToWishlist(thisProduct); setToggleHeart((b) => [...toggleHeart, thisProduct.id]);
                }}><FaRegHeart /></button>
            </div>


            {/*========Meta=========*/}

            <div className="details-meta">
              <p>SKU: <span>{thisProduct.SKU}</span></p>
              <p>Tags: <span>{thisProduct.tags}</span></p>
              <p>Availability: <span>{thisProduct.stock}</span></p>
            </div>



        </div>
      </div>

      
      {/*==============Specifications Section==============*/}

      <DetailsInfo />

      {/*==============Trending Section==============*/}


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
            <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-image"><img src={item.image} alt="" className="product-img default" />
  
            <img src={item.imageAlt} alt="" className="product-img hover" />
            </Link>
  
            <div className="product-actions">
              
              <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="action-btn" aria-label="Quick View"><FaEye /  >
              </Link>
  
  
              <a className="action-btn" aria-label="Compare"><LuGitCompare />
              </a>
  
            </div>
  
            <div className={item.tag === 'Hot' ? 'light-red product-badge' : 'product-badge light-blue'}>{item.tag}</div>
  
          </div>
  
          <div className="product-content">
          <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-category">{item.type}</Link>
          <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)}>
            <h3 className="product-title">{item.name}</h3>
        </Link>
        <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-rating">
          <p>{item.rating}</p>
          <span><BsStarFill /></span>
        </Link>
  
        <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-price">
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

      
    {/*==========Related Section=============*/}
    
    <section className='related-section'>

    <h3 className="sub-title">Related <span className="sub-title-alt">Products</span></h3>

    <div className='product-wrapper'>

    {filterItems.map((item, id)=> {
   
      return (
        <div className="product-item" key={id}>
        <div className="product-banner">
          <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-image"><img src={item.image} alt="" className="product-img default" />

          <img src={item.imageAlt} alt="" className="product-img hover" />
          </Link>

          <div className="product-actions">
            
            <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="action-btn" aria-label="Quick View"><FaEye /  >
            </Link>


            <a className="action-btn" aria-label="Compare"><LuGitCompare />
            </a>

          </div>

          <div className={item.tag === 'Hot' ? 'light-red product-badge' : 'product-badge light-blue' }>{item.tag}</div>

        </div>

        <div className="product-content">
          <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-category">{item.type}</Link>
          <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)}>
            <h3 className="product-title">{item.name}</h3>
        </Link>
        <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-rating">
          <p>{item.rating}</p>
          <span><BsStarFill /></span>
        </Link>

        <Link to={`/details/${item.id}`} onClick={() => setActiveImage(item.image)} className="product-price">
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
      )
    })}

   
        
              </div>
              </section>

    </section>
  );
};

export default DetailsProduct;
