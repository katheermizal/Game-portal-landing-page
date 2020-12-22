import React, { Component } from "react";
import Slider from "react-slick";
import data from "../../source/data.json";
import { Heading } from '../Typhography';

class SlickSlider extends Component {
  render() {
    const settings = {
      className: "slider center variable-width",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      arrows: true,
      dots: true,
      variableWidth: true
    };
    return (
      <>
        <Slider {...settings}>
          {
              data.MainSlider.map((slider, e) => {
                  return (
                      <div  key={e} className="slider__item" style={{ width: 800 }}>
                        <img src={ slider.imageUrl } alt={ slider.title }/>
                        <Heading type="H1" className="heading-type__1">{ slider.title }</Heading>
                      </div>
                  );
              })
          }
        </Slider>
      </>
    );
  }
}

export default SlickSlider;