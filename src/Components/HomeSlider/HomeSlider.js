import React, { Component } from "react";
import Slider from "react-slick";

import "./HomeSlider.css";
import { fetchSliderItems } from "../../Utility/Utility";
import SliderLoader from "../SliderLoader/SliderLoader";
export default class HomeSlider extends Component {
  state = {sliderItems:[]}
  componentDidMount = async()=>{
   var sliderItems = await fetchSliderItems();

   this.setState((prevState)=>({
     ...prevState,sliderItems
   }))
  }
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
      var {sliderItems} = this.state;
    return (
      <div className="slider-container-custom">
     
      <Slider  {...settings}>
       {
         sliderItems.length ? sliderItems.map((item)=> <div key={item.id}>
         <img style={{width:"100%",height:"42vw"}} src={item.imageUrl} alt=""/>
        </div>):<SliderLoader/>
       }
      
    
      </Slider>
    </div>
    );
  }
}