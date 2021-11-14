import React, { Component } from "react";
import "swiper/swiper-bundle.css";
import bannerBubbleWafflee from "../../../components/Cart/header_baner/banner-bubble-wafflee.jpg";
import lavazzaSekend from "../../../components/Cart/header_baner/lavazza_sekend.jpg";
import lavazza from "../../../components/Cart/header_baner/lavazza.jpg";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 2000,
      fade: true,
      speed: 800,
      pauseOnHover: false,
    };
    return (
      <div className="container">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings}>
          <img src={bannerBubbleWafflee} alt="Banana Wafle"></img>
          <img src={lavazzaSekend} alt="lavazzaSekend"></img>
          <img src={lavazza} alt="lavazza"></img>
        </Slider>
      </div>
    );
  }
}
