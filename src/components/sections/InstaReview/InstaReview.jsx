import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import instaLogo from '../../../assets/images/icons/Instagram.svg';
import rightArrow from '../../../assets/images/icons/black_arrow_right.svg';

import post1_jpg from '../../../assets/images/instareview/post1.jpg';
import post1_jpg2x from '../../../assets/images/instareview/post1@2x.jpg';
import post1_jpg3x from '../../../assets/images/instareview/post1@3x.jpg';
import post1_webp from '../../../assets/images/instareview/post1.webp';
import post1_webp2x from '../../../assets/images/instareview/post1@2x.webp';
import post1_webp3x from '../../../assets/images/instareview/post1@3x.webp';

import post2_jpg from '../../../assets/images/instareview/post2.jpg';
import post2_jpg2x from '../../../assets/images/instareview/post2@2x.jpg';
import post2_jpg3x from '../../../assets/images/instareview/post2@3x.jpg';
import post2_webp from '../../../assets/images/instareview/post2.webp';
import post2_webp2x from '../../../assets/images/instareview/post2@2x.webp';
import post2_webp3x from '../../../assets/images/instareview/post2@3x.webp';

import post3_jpg from '../../../assets/images/instareview/post3.jpg';
import post3_jpg2x from '../../../assets/images/instareview/post3@2x.jpg';
import post3_jpg3x from '../../../assets/images/instareview/post3@3x.jpg';
import post3_webp from '../../../assets/images/instareview/post3.webp';
import post3_webp2x from '../../../assets/images/instareview/post3@2x.webp';
import post3_webp3x from '../../../assets/images/instareview/post3@3x.webp';

import post4_jpg from '../../../assets/images/instareview/post4.jpg';
import post4_jpg2x from '../../../assets/images/instareview/post4@2x.jpg';
import post4_jpg3x from '../../../assets/images/instareview/post4@3x.jpg';
import post4_webp from '../../../assets/images/instareview/post4.webp';
import post4_webp2x from '../../../assets/images/instareview/post4@2x.webp';
import post4_webp3x from '../../../assets/images/instareview/post4@3x.webp';

import post5_jpg from '../../../assets/images/instareview/post5.jpg';
import post5_jpg2x from '../../../assets/images/instareview/post5@2x.jpg';
import post5_jpg3x from '../../../assets/images/instareview/post5@3x.jpg';
import post5_webp from '../../../assets/images/instareview/post5.webp';
import post5_webp2x from '../../../assets/images/instareview/post5@2x.webp';
import post5_webp3x from '../../../assets/images/instareview/post5@3x.webp';

import post6_jpg from '../../../assets/images/instareview/post6.jpg';
import post6_jpg2x from '../../../assets/images/instareview/post6@2x.jpg';
import post6_jpg3x from '../../../assets/images/instareview/post6@3x.jpg';
import post6_webp from '../../../assets/images/instareview/post6.webp';
import post6_webp2x from '../../../assets/images/instareview/post6@2x.webp';
import post6_webp3x from '../../../assets/images/instareview/post6@3x.webp';

import post7_jpg from '../../../assets/images/instareview/post7.jpg';
import post7_jpg2x from '../../../assets/images/instareview/post7@2x.jpg';
import post7_jpg3x from '../../../assets/images/instareview/post7@3x.jpg';
import post7_webp from '../../../assets/images/instareview/post7.webp';
import post7_webp2x from '../../../assets/images/instareview/post7@2x.webp';
import post7_webp3x from '../../../assets/images/instareview/post7@3x.webp';

import post8_jpg from '../../../assets/images/instareview/post8.jpg';
import post8_jpg2x from '../../../assets/images/instareview/post8@2x.jpg';
import post8_jpg3x from '../../../assets/images/instareview/post8@3x.jpg';
import post8_webp from '../../../assets/images/instareview/post8.webp';
import post8_webp2x from '../../../assets/images/instareview/post8@2x.webp';
import post8_webp3x from '../../../assets/images/instareview/post8@3x.webp';

import post9_jpg from '../../../assets/images/instareview/post9.jpg';
import post9_jpg2x from '../../../assets/images/instareview/post9@2x.jpg';
import post9_jpg3x from '../../../assets/images/instareview/post9@3x.jpg';
import post9_webp from '../../../assets/images/instareview/post9.webp';
import post9_webp2x from '../../../assets/images/instareview/post9@2x.webp';
import post9_webp3x from '../../../assets/images/instareview/post9@3x.webp';

import post10_jpg from '../../../assets/images/instareview/post10.jpg';
import post10_jpg2x from '../../../assets/images/instareview/post10@2x.jpg';
import post10_jpg3x from '../../../assets/images/instareview/post10@3x.jpg';
import post10_webp from '../../../assets/images/instareview/post10.webp';
import post10_webp2x from '../../../assets/images/instareview/post10@2x.webp';
import post10_webp3x from '../../../assets/images/instareview/post10@3x.webp';

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
            <picture>
              <source
                type="image/webp"
                srcSet={`${post1_webp} 1x, ${post1_webp2x} 2x, ${post1_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post1_jpg}
                srcSet={`${post1_jpg2x} 2x, ${post1_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-KjAT-gutD/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post2_webp} 1x, ${post2_webp2x} 2x, ${post2_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post2_jpg}
                srcSet={`${post2_jpg2x} 2x, ${post2_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-5WST2H9Ov/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post3_webp} 1x, ${post3_webp2x} 2x, ${post3_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post3_jpg}
                srcSet={`${post3_jpg2x} 2x, ${post3_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-Humk0hgd2/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post4_webp} 1x, ${post4_webp2x} 2x, ${post4_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post4_jpg}
                srcSet={`${post4_jpg2x} 2x, ${post4_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-IZdQQFmN5/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post5_webp} 1x, ${post5_webp2x} 2x, ${post5_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post5_jpg}
                srcSet={`${post5_jpg2x} 2x, ${post5_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B-HxAivhIdO/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post6_webp} 1x, ${post6_webp2x} 2x, ${post6_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post6_jpg}
                srcSet={`${post6_jpg2x} 2x, ${post6_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9g-7ptAxA5/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post7_webp} 1x, ${post7_webp2x} 2x, ${post7_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post7_jpg}
                srcSet={`${post7_jpg2x} 2x, ${post7_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9Ruz9bI6CI/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post8_webp} 1x, ${post8_webp2x} 2x, ${post8_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post8_jpg}
                srcSet={`${post8_jpg2x} 2x, ${post8_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9KL-z3nlMH/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post9_webp} 1x, ${post9_webp2x} 2x, ${post9_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post9_jpg}
                srcSet={`${post9_jpg2x} 2x, ${post9_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/p/B9EG74hpO30/">
            <picture>
              <source
                type="image/webp"
                srcSet={`${post10_webp} 1x, ${post10_webp2x} 2x, ${post10_webp3x} 3x`}
              />
              <img
                className="insta__img"
                src={post10_jpg}
                srcSet={`${post10_jpg2x} 2x, ${post10_jpg3x} 3x`}
                alt="instagram post"
              />
            </picture>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default InstaReview;
