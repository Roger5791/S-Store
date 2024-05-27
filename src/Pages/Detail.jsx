import React from 'react'
import '../CSS/Details.css'
import DetailsProduct from '../Details/Components/DetailsProduct'


const Detail = ({addtocart, addToWishlist}) => {




  return (
    <div>
  <DetailsProduct addtocart={addtocart} addToWishlist={addToWishlist} />
   
    </div>
  )
}

export default Detail