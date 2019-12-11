import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import logo from './Tre_Jones.jpg';
import { Link } from "react-router-dom";
import { db } from "./fire"

class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      data: [],
      players: [] 
    };
  }
  componentDidMount() {
    db.collection("Athletes")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ players: data 
        });
      });
  
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
    const { players } = this.state;


    return (
      <div>
        <h2>Basketball</h2>
   
        <Slider ref={c => (this.slider = c)} {...settings}>
        {players.map(player=>(
          <div key={0}>
            <Link to="/athletes">
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
                    {player.firstName} {player.lastName}
                    </Typography>
                    <Typography className="title" variant="body2" color="textSecondary" component="p">
                    {player.school} {player.sport}
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Paper>
            </Link>
            </div>
            ))}
          <div key={1}>

          </div>
          <div key={2}>
            3
          </div>
          <div key={3}>
            4
          </div>
          <div key={4}>
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
