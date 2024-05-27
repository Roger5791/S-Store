import React, { useState } from 'react'

import avatar1 from '../../Assets/avatar-1.jpg'
import avatar2 from '../../Assets/avatar-2.jpg'
import avatar3 from '../../Assets/avatar-3.jpg'

import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const DetailsInfo = () => {

    const [activeTab, setActiveTab] = useState('show');

  
  

  return (
    <div>
    
    <section className="details-tab">
        <div className="detail-tabs">
          <span className={`detail-tab ${
            activeTab === 'show' ? "active-tab" : ""}`}
        onClick={() => setActiveTab('show')} >Additional Info</span>
          <span className={`detail-tab ${
            activeTab === 'show' ? "" : "active-tab"}`} onClick={() => setActiveTab('hide')} >Reviews (3)</span>
        </div>

        <div className="details-tabs-content">
          <div className="details-tab-content">
       
            <table className={`info-table ${activeTab === 'show' ? "" : "tab-hide"}`}>
              <tbody><tr>
                <th>Style</th>
                <td>Leather Jacket</td>
              </tr>

              <tr>
                <th>Fit type</th>
                <td>Regular</td>
              </tr>  

              <tr>
                <th>Length</th>
                <td>Standard Length</td>
              </tr>  

              <tr>
                <th>Neck style</th>
                <td>Non-hooded Neck</td>
              </tr>  

              <tr>
                <th>Sleeve </th>
                <td>Long Sleeve</td>
              </tr> 

              <tr>
                <th>Pockets</th>
                <td>4</td>
              </tr> 

              <tr>
                <th>Material composition</th>
                <td>Leather</td>
              </tr>  

              <tr>
                <th>Item Weight</th>
                <td>800 g</td>
              </tr>  

              <tr>
                <th>Item Dimensions LxWxH</th>
                <td>55.9 x 43.2 x 6.4 Centimeters</td>
              </tr>  

              <tr>
                <th>Country of Origin</th>
                <td>Germany</td>
              </tr>  

              <tr>
                <th>Manufacturer</th>
                <td>Rogue Industries</td>
              </tr>  

              <tr>
                <th>Care instructions</th>
                <td>Dry Clean Only</td>
              </tr>  

              <tr>
                <th>Closure Type</th>
                <td>Zipper</td>
              </tr>  

              <tr>
                <th>ASIN </th>
                <td>B07YC88FZ2</td>
              </tr>  

              <tr>
                <th>Item part number</th>
                <td>BM-JKT-FS-19972-YELLOW-40A</td>
              </tr>  

               
              
              

            </tbody></table>
          </div>

          <div className="details-tab-content">
            <div className={`reviews-container ${activeTab == 'show' ? "tab-hide" : ""}`}>
              <div className="review-single">
                <div>
                  <img src={avatar1} alt="" className="review-img" />
                  <h4 className="review-title">Oliver Queen</h4>
                </div>

                <div className="review-data">
                  <div className="review-rating">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalf />
                  </div>

                  <p className="review-description">Excellent Quality and very fast International Shipping.</p>

                  <span className="review-date">
                    December 16, 2021 at 15:17 PM
                  </span>
                </div>

              </div>

              <div className="review-single">
                <div>
                  <img src={avatar2} alt="" className="review-img" />
                  <h4 className="review-title">Maya Brady</h4>
                </div>

                <div className="review-data">
                  <div className="review-rating">
                  <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                  </div>

                  <p className="review-description">Great Product. Received faster than expected. Recommended purchase...</p>

                  <span className="review-date">
                    January 02, 2022 at 09:37 AM
                  </span>
                </div>

              </div>

              <div className="review-single">
                <div>
                  <img src={avatar3} alt="" className="review-img" />
                  <h4 className="review-title">Barry Allen</h4>
                </div>

                <div className="review-data">
                  <div className="review-rating">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalf />
                  </div>

                  <p className="review-description">Excellent Quality, Authentic and Beautiful</p>

                  <span className="review-date">
                    January 23, 2022 at 11:12 AM
                  </span>
                </div>

              </div>


              <div className="review-form">
              <h4 className="review-form-title">Add a Review</h4>

              <div className="rate-product">
             <span><IoStar /></span>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              </div>

              <form className="form">
                <textarea className="form-input textarea" placeholder="Write your comments"></textarea>

                <div className="form-group">
                  <input type="text" placeholder="Name" className="form-input" />

                  <input type="email" placeholder="Email" className="form-input" />
                </div>

                <div className="form-btn">
                  <button type='button' className="checkout-btn">Submit Review</button>
                </div>
              </form>
            </div>
            </div>

          </div>
        </div>
      </section>
    
    </div>
  )
}

export default DetailsInfo