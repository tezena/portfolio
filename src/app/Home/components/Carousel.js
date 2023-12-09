import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class ProjectSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
        slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div>
        <Slider {...settings}>
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
            alt="image"
            class="w-full"
          />
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
            alt="image"
            class="w-full"
          />
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
            alt="image"
            class="w-full"
          />
        </Slider>
      </div>
    );
  }
}
