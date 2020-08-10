import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/slider-1.jpg"
import img2 from "../../assets/img/slider-2.jpg"
import "./HomeSlider.css"
export default class HomeSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        lazyLoad: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
  
      };
    return (
      <div>
     
        <Slider {...settings}>
          <div >
           <img style={{width:"100%",height:"40vw"}} src={img1} alt=""/>
          </div>
          <div>
           <img style={{width:"100%",height:"40vw"}} src={img2} alt=""/>
          </div>
      
        </Slider>
      </div>
    );
  }
}