import React, { Component } from "react";
import logo from "./Cassius_Stanley.jpg";
// material-ui
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Paper,
  Image,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core/";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const MyReviewButton = styled(Button)({
  background: "linear-gradient(45deg,  silver, grey 90%)",
  border: 5,
  borderRadius: 5,
  boxShadow: "0 3px 5px 2px rgba(100, 105, 20, .3)",
  color: "white",
  height: 60,
  margin: 20,
  zIndex: 999
});

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, blue, #FF8E53 90%)",
  border: 5,
  borderRadius: 5,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 60,
  margin: 8,
  padding: "4 30px"
});

class PlayerProfile extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      page: 0,
      rowsPerPage: 10
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Card className="our-player">
            <CardActionArea className="person">
              <CardMedia
                component="img"
                className="img-fluid"
                image={logo}
                title="University Logo"
              />
              <br />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <MyReviewButton
            variant="contained"
            style={{ float: "right" }}
            color="grey"
            className="float-right"
            onClick={this.onSend}
          >
            {" "}
            Reviews
          </MyReviewButton>
        </div>
        <div>
          <h2>Cassius Stanley</h2>
          <p>
            Cassius Jerome Stanley is an American college basketball player for
            the Duke Blue Devils of the Atlantic Coast Conference (ACC).
          </p>
          <MyButton> Shoutout: $50</MyButton>
          <br />
          <MyButton> Personal Video: $30</MyButton>
          <br />
          <MyButton>Signed merchandise: $10-$80</MyButton>
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}

export default PlayerProfile;

export { PlayerProfile };
