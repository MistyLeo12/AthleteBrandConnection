import React, { Component } from "react";
import Slider from "react-slick";
import { Cards } from './Cards';
import { Link } from 'react-router-dom';
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import logo from './Duke-Basketball-logo.png';
import { db } from "./fire"
import {storageRef} from "./fire"

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

  constructor() {
    super();
    this.state = {
      schools: [],
      images: []
    }
  }

  componentDidMount() {
    db.collection("Schools")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ schools: data 
        });
      });
  
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const { schools } = this.state;
   
    return (  
      <div>
        <h2>University</h2>
        <SamplePrevArrow />
        <Slider {...settings}>
        {schools.map(school=>(
        <div key={0}>
            <Link to="/university">
            <Paper>
       
        <Card className="our-team" > 
          <CardActionArea className="university"  style ={{backgroundColor: school.color}}>
            <br />
            <CardContent className="" style ={{color: school.color}}>
         
            <Typography className="name" gutterBottom variant="h5" component="h2" >
             
              </Typography>
              <Typography className="title2" variant="body2" color="textSecondary" component="p">
              {school.fullName}
              </Typography> 
            </CardContent>
       
          </CardActionArea>
          <CardActions className="social">
            <Button className="" size="small" style ={{color: school.color}}>
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
        ))}

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
