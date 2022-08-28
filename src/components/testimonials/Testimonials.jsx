import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt=''/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores ullam eligendi ipsa, distinctio officiis. 
              Corporis commodi impedit magnam consequatur ratione, sint, sit mollitia quaerat dolore, 
              laborum incidunt omnis vitae.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt=''/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores ullam eligendi ipsa, distinctio officiis. 
              Corporis commodi impedit magnam consequatur ratione, sint, sit mollitia quaerat dolore, 
              laborum incidunt omnis vitae.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt=''/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores ullam eligendi ipsa, distinctio officiis. 
              Corporis commodi impedit magnam consequatur ratione, sint, sit mollitia quaerat dolore, 
              laborum incidunt omnis vitae.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt=''/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores ullam eligendi ipsa, distinctio officiis. 
              Corporis commodi impedit magnam consequatur ratione, sint, sit mollitia quaerat dolore, 
              laborum incidunt omnis vitae.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials