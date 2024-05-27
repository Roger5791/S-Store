import React from 'react'
import './Showcase.css'
import { showcaseData } from '../../../Data/Data'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <div className="section">
    <div className="showcase-head">
      <h6 className='show-head'>Hot Releases</h6>
      <h6 className='show-head'>Deals & Offers</h6>
      <h6 className='show-head'>Top Selling</h6>
      <h6 className='show-head'>Trending</h6>
    </div>

    <h6 className='show-head show-hide'>Showcase</h6>
        <div className="showcase-container">
          <div className="showcase-wrapper">
            

            { showcaseData.map((item,id) =>{
                return (
                    
            <div className="showcase-item" key={id}>
            
            <Link to={`details/${item.id}`} className="showcase-img-box">
              <img src={item.image} alt="" className="showcase-img" />
            </Link>

            <div className="showcase-content">
              <Link to={`details/${item.id}`}><h4 className="showcase-title">{item.name}</h4>
              </Link>

              <div className="showcase-price flex">
                <span className="new-price">${item.price}</span>
                <span className="old-price">${item.oldPrice}</span>
              </div>

            </div>

          </div>
                )
            })}


          </div>

        </div>
      </div>
  )
}

export default Showcase