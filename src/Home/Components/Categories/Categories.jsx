import React from 'react'
import './Categories.css'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import { catData } from '../../../Data/Data'
import { breakpoints } from '../../../Data/Data';
import { Link } from 'react-router-dom';

const Categories = () => {

  return (
<div className='cat-wrapper section'>
<div className='title-head'>

    <h3 className='sub-title'>Popular <span className='sub-title-alt'>Categories</span></h3>
    <div className="button-prev-slide slidebutton">
    <GrFormPrevious/>
</div>
<div className="button-next-slide slidebutton">
    <GrFormNext/>
</div>

</div>

    <Swiper className='swiper'
    spaceBetween={30}
    slidesPerView={5} breakpoints={breakpoints} modules={[Navigation]}   navigation={
        { prevEl:'.button-prev-slide',
         nextEl:'.button-next-slide'}
     } 
 
  >
 
    <div className='cat-con'>
        {catData.map((item, id) => {
            return (
                <SwiperSlide  key={id}>
                <div className='cat-item' >
                <Link to={item.link}>
                    <div className='cat-img'>
                    <img src={item.image} alt="" />
                    </div>
                    <p>{item.name}</p>
                    </Link>
                </div>
                </SwiperSlide>
            )

        })}
    </div>

              

    </Swiper>
   

    </div>
  )
}

export default Categories