import React from "react";
import Slider from "react-slick";
import "./CarouselPage.scss";

function CarouselPage() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: false,
      fade: false,
      lazyLoad: true
    };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="https://images.unsplash.com/photo-1481358758723-4601c3107e65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80" alt="1"/>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1616&q=80" alt="2"/>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1475312452884-7ad5751c535d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2612&q=80" alt="3"/>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselPage;