import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import logo from './Tre_Jones.jpg';
import { Link } from "react-router-dom";

class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      data: [],
    };
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
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Basketball</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <Link to="/profile">
            <Paper>
              <Card className="our-team">
                <CardActionArea className="picture">
                  <CardMedia
                  component="img"
                  height="300px"
                  maxWidth="50px"
                  className = "img-fluid"
                  image = { logo }
                  title="Contemplative Reptile"
                  />
                  <CardContent className="team-content">
                    <Typography className="name" gutterBottom variant="h5" component="h2">
                    Tre Jones
                    </Typography>
                    <Typography className="title" variant="body2" color="textSecondary" component="p">
                    Duke University Men's Basketball
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="social">
                  <Button className="" size="small" color="primary">
                  Share
                  </Button>
                  <Button size="small" color="primary">
                  Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
            </Link>
          </div>
          <div key={2}>
            2
          </div>
          <div key={3}>
            3
          </div>
          <div key={4}>
            4
          </div>
          <div key={5}>
            <h3>5</h3>
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
