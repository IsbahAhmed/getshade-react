import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/slider-1.jpg"
import img2 from "../../assets/img/slider-2.jpg"
import "./HomeSlider.css";
import { fetchSliderItems } from "../../Utility/Utility";
export default class HomeSlider extends Component {
  state = {}
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
      <div>
     
      <Slider {...settings}>
       {
         sliderItems ? sliderItems.map((item)=> <div key={item.id}>
         <img style={{width:"100%",height:"40vw"}} src={item.imageUrl} alt=""/>
        </div>):<div></div>
       }
      
    
      </Slider>
    </div>
    );
  }
}