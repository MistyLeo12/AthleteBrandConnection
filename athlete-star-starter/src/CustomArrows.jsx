import React, { Component } from "react";
import Slider from "react-slick";
import { Cards } from './Cards';
import { Link } from 'react-router-dom';
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import logo from './Duke-Basketball-logo.png';

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
      slidesToShow: 3,
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
            <Link to="/university">
            <Paper>
        <Card className="our-team">
          <CardActionArea className="university">
            <CardMedia
            component="img"
            className = "img-fluid"
            image = { logo }
            title="University Logo"
            />
            <br />
            <CardContent className="team-content">
              <Typography className="name" gutterBottom variant="h5" component="h2">
              Duke University
              </Typography>
              <Typography className="title" variant="body2" color="textSecondary" component="p">
              Duke University Athletics
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="social">
            <Button className="" size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Open Profile
            </Button>
          </CardActions>
        </Card>
      </Paper>
            </Link>
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
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
