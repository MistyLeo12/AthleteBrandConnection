import React, { Component } from "react";
import Slider from "react-slick";
import { Cards } from './Cards';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2>University</h2>
        <SamplePrevArrow />
        <Slider {...settings}>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <SampleNextArrow />
      </div>
    );
  }
}

export default CustomArrows;

export {
  CustomArrows,
};
