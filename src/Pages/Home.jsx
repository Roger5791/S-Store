import React from 'react'
import Categories from '../Home/Components/Categories/Categories'
import Banner from '../Home/Components/Banner/Banner'
import ProductCard from '../Home/Components/ProductCard/ProductCard'
import Featured from '../Home/Components/Featured/Featured'
import Deals from '../Home/Components/Deals/Deals'
import Showcase from '../Home/Components/Showcase/Showcase'
import MobileNav from './MobileNav'



const Home = ({addtocart, addToWishlist, wishItem, setWishItem}) => {
 
  return (
    <div>

   

      <Banner />
        <Categories />
        <ProductCard addtocart={addtocart} addToWishlist={addToWishlist} setWishItem={setWishItem} wishItem={wishItem} />
        <Deals />
        <Featured addtocart={addtocart} addToWishlist={addToWishlist} />
        <Showcase />
    </div>
  )
}

export default Home