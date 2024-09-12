import React from 'react';
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  return (
    <div>
      <Swiper
        className="home-slider" // Add this line
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ enabled: true, delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/assets/images/home/img4.jpg" alt="IPhone" className='img'  />
          <div className="slide-text">
            <h2>Welcome to UBuy</h2>
            <p>UBuy is an e-commerce platform that connects buyers with sellers from all over the world.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/home/img2.jpg" alt="IPhone"  className='img'  />
          <div className="slide-text">
            <h2>Discover new products</h2>
            <p>Explore our vast collection of products from various categories.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/home/img3.jpg" alt="IPhone" className='img'   />
          <div className="slide-text">
            <h2>Secure payment</h2>
            <p>Our secure payment system ensures a safe and hassle-free transaction.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/home/img1.jpg" alt="IPhone"className='img'  />
          <div className="slide-text">
            <h2>Fast delivery</h2>
            <p>Get your products delivered quickly and efficiently.</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Product />
    </div>
  );
};

export default Home;
