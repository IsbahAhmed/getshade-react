import React, { Component } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";

export default class ProductSlider extends Component {
    render() {
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          lazyLoad:true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
           
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        var {products} = this.props;
        return (
          <div>

            <Slider {...settings}>
                {
                    products.length && 
                    products.map((prod)=>
                    <div style={{display:"flex",justifyContent:"center"}} key={prod.productId}><Product productInfo={prod} style={{width:"80%",height:"50rem",marginLeft:"10%"}}/></div>
                    )
                }
            </Slider>
          </div>
        );
      }
    
    }