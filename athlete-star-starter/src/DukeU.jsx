import React, { Component } from 'react';
import logo from './pictures/Duke-Basketball-logo.png';
import { PreviousNextMethods } from './PreviousNextMethods';
// material-ui
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class UniversityPage extends Component {
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
      <Paper>
        <br />
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
        <br />
        <PreviousNextMethods />
      </Paper>
    );
  }
}

export default (UniversityPage);

export {
  UniversityPage,
};
