import React from 'react'
import './Deals.css'
import { Link } from 'react-router-dom';

const Deals = () => {

  const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date("Dec 1, 2024 22:37:43").getTime();
    const now = new Date().getTime();
    const remainingTime = ((countDate) - (now));
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
    document.querySelector(".day2").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour2").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute2").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second2").innerText = textSecond > 0 ? textSecond : 0;
  };
  
  // should use 500 as setInterval won't always run on time.
 setInterval(countdown); 
                    


  return (
    <section className="section">
    <h3 className='sub-title'>Top <span className='sub-title-alt'>Deals</span></h3>
        <div className="deals-container ">
          <div className="deals-item">
            <div className="deals-group">
              <h3 className="deals-brand">Deal of the Day</h3>
              <span className="deals-category">Limited Quantities</span>
            </div>

            <h4 className="deals-title">Summer Collection New Morning Design</h4>

            <div className="deals-price flex">
              <span className="new-price">$169.00</span>
              <span className="old-price">$189.99</span>
            </div>

            <div className="deals-group">
              <p className="deals-countdown">Hurry Up! Offer Ends In: </p>

              <div className="countdown">
                <div className="countdown-amount">
                  <p className="countdown-period day">02</p>
                  <span className="unit">Days</span>
                </div>

                <div className="countdown-amount">
                  <p className="countdown-period hour">09</p>
                  <span className="unit">Hours</span>
                </div>

                <div className="countdown-amount">
                  <p className="countdown-period minute">11</p>
                  <span className="unit">Mins</span>
                </div>

                <div className="countdown-amount">
                  <p className="countdown-period second">59</p>
                  <span className="unit">Sec</span>
                </div>
              </div>


            </div>

            <div className="deals-btn">
            <Link to={'shop'} className="btn btn-md">Shop Now</Link>
            </div>

          </div>

          <div className="deals-item">
            <div className="deals-group">
              <h3 className="deals-brand">Women's Clothing</h3>
              <span className="deals-category">Limited Quantities</span>
            </div>

            <h4 className="deals-title">Try something new on vacation</h4>

            <div className="deals-price flex">
              <span className="new-price">$125.00</span>
              <span className="old-price">$159.99</span>
            </div>

            <div className="deals-group">
              <p className="deals-countdown">Hurry Up! Offer Ends In: </p>

              <div className="countdown">
                <div className="countdown-amount">
                  <p className="countdown-period day2">02</p>
                  <span className="unit">Days</span>
                </div>

                <div className="countdown-amount">
                  <p className="countdown-period hour2">09</p>
                  <span className="unit">Hours</span>
                </div>

                <div className="countdown-amount">
                  <p className="countdown-period minute2">11</p>
                  <span className="unit">Mins</span>
                </div>

                <div className="countdown-amount">
                  <p className="countdown-period second2">59</p>
                  <span className="unit">Sec</span>
                </div>
              </div>

            </div>


            <div className="deals-btn">
              <Link to={'shop'} className="btn btn-md">Shop Now</Link>
            </div>

          </div>
          
        </div>
      </section>
  )

 
 

}

export default Deals