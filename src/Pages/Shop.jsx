import React, {useState } from 'react'
import { Link} from 'react-router-dom'

import '../CSS/Shop.css'

import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";
import { productData } from '../Data/Data';

const Shop = ({addToWishlist}) => {

  const [toggleHeart, setToggleHeart] = useState([]);

  


  return (
   <div className='shop-wrapper'>

   <div className="shop-left">
    
    <div className="filters">
      
    

    <h3>Shop by Category</h3>

        
        <div className="shop-links ">
        <Link to={'/shop'}>All</Link>
        <Link to={'/search/t-shirt'}>T-Shirts</Link>
        <Link to={'/search/shirt'}>Shirts</Link>
        <Link to={'/search/jacket'}>Jackets</Link>
        <Link to={'/search/hoodie'}>Hoodies</Link>
        <Link to={'/search/suit'}>Suits</Link>

        
        <Link to={'/search/top'}>Partywear</Link>
        <Link to={'/search/shoe'}>Shoes</Link>
        <Link to={'/search/sneaker'}>Sneakers</Link>
        <Link to={'/search/sweatshirt'}>Sweatshirts</Link>
        <Link to={'/search/shoe'}>Shoes</Link>
        <Link to={'/search/bikini'}>Bikini</Link>
      
        </div>
   
      </div>
    </div>


   
   <div className="shop-right product-wrapper">
   {productData.map((item, id)=> {
    return (
      <div className="product-item" key={id}>
      <div className="product-banner">
        <Link to={`/details/${item.id}`} className="product-image"><img src={item.image} alt="" className="product-img default" />

        <img src={item.imageAlt} alt="" className="product-img hover" />
        </Link>

        <div className="product-actions">
          
          <Link to={`/details/${item.id}`} className="action-btn" aria-label="Quick View"><FaEye /  >
          </Link>


          <Link className="action-btn" aria-label="Compare"><LuGitCompare />
          </Link>

        </div>

        <div className={item.tag === 'Hot' ? 'light-red product-badge' : 'product-badge light-blue' }>{item.tag}</div>

      </div>

      <div className="product-content">
        <Link to={`/details/${item.id}`} className="product-category">{item.type}</Link>
        <Link to={`/details/${item.id}`}>
          <h3 className="product-title">{item.name}</h3>
      </Link>
      <Link to={`/details/${item.id}`} className="product-rating">
        <p>{item.rating}</p>
        <span><BsStarFill /></span>
      </Link>

      <Link to={`/details/${item.id}`} className="product-price">
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


  

   </div>
  )
}

export default Shop