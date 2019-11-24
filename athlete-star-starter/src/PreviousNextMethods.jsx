import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Players from './Players';

class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Players</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <Players />
          </div>
          <div key={2}>
            <Players />
          </div>
          <div key={3}>
            <Players />
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
          </div>
        </Slider>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default PreviousNextMethods;

export {
  PreviousNextMethods,
};
