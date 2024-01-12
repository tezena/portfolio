"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ProjectSlider(props) {
 
  const {images } = props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
        slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div >
        <Slider {...settings}>
          
          {
            images.map((image, index) => 
               (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  class="w-full object-contain"
                />
              )
            )
         }
        </Slider>
      </div>
    );
}
