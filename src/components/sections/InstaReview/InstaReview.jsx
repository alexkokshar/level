import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import instaLogo from '../../../assets/images/icons/Instagram.svg';
import rightArrow from '../../../assets/images/icons/black_arrow_right.svg';
import instaPost1 from '../../../assets/images/instareview/1.jpg';
import instaPost2 from '../../../assets/images/instareview/2.jpg';
import instaPost3 from '../../../assets/images/instareview/3.jpg';
import instaPost4 from '../../../assets/images/instareview/4.jpg';
import instaPost5 from '../../../assets/images/instareview/5.jpg';
import instaPost6 from '../../../assets/images/instareview/6.jpg';
import instaPost7 from '../../../assets/images/instareview/7.jpg';
import instaPost8 from '../../../assets/images/instareview/8.jpg';
import instaPost9 from '../../../assets/images/instareview/9.jpg';
import instaPost10 from '../../../assets/images/instareview/10.jpg';
import './InstaReview.scss';

function InstaReview() {
  return (
    <div className="insta">
      <div className="insta__links">
        <img src={instaLogo} alt="Instagram logo" />
        <a href="https://www.instagram.com/explore/tags/level_kitchen/" className="insta__link">
          #level_kitchen <span> в Instagram </span>
          <img src={rightArrow} alt="right black arrow" />
        </a>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="insta__swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          970: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-Zrh36J-Nv/">
            <img className="insta__img" src={instaPost1} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-KjAT-gutD/">
            <img className="insta__img" src={instaPost2} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-5WST2H9Ov/">
            <img className="insta__img" src={instaPost3} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-Humk0hgd2/">
            <img className="insta__img" src={instaPost4} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-IZdQQFmN5/">
            <img className="insta__img" src={instaPost5} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-HxAivhIdO/">
            <img className="insta__img" src={instaPost6} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9g-7ptAxA5/">
            <img className="insta__img" src={instaPost7} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9Ruz9bI6CI/">
            <img className="insta__img" src={instaPost8} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9KL-z3nlMH/">
            <img className="insta__img" src={instaPost9} alt="instagram post" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9EG74hpO30/">
            <img className="insta__img" src={instaPost10} alt="instagram post" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default InstaReview;
