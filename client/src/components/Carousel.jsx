import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {useNavigate, Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
/**
* @author
* @function Carousel
**/
const Carousel
 = ({images}) => {
  const navigate = useNavigate()
  return(
    <Swiper
       
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      
    >
        {
            images.map((image) => (
                <SwiperSlide onClick={() => navigate(`/products`)}   zIndex={-100}> < img src={image} alt="carousel" /></SwiperSlide>
            ))
        }
    </Swiper>
   
  );
};
export default Carousel