import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.css'
import { bannerData } from '../../../Data/Data'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Banner = () => {
  return (
    <div>

    <Swiper className='swiper'
    spaceBetween={0}
    slidesPerView={1}  loop={true}
    modules={[Autoplay, Pagination, EffectFade, Navigation]} effect="fade" pagination={{ clickable: true, dynamicBullets: true, }} autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      navigation={
        { prevEl:'.slideP-3',
         nextEl:'.slideN-3'}
     } 
  >
    
    {
        bannerData.map((item, id)=> {
            return (
                <SwiperSlide  key={id}>
                <div className='banner-img'>
                   <Link to={'shop'}><img src={item.image} alt="" /></Link>

                   <div className="button-prev-slide slideP-3">
                   <GrFormPrevious/>
                </div>
                <div className="button-next-slide slideN-3">
                   <GrFormNext/>
                </div>
                </div>
                </SwiperSlide>
            )
        })
    }
    

    </Swiper>

    </div>
  )
}

export default Banner