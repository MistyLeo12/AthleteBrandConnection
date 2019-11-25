import React, { Component } from 'react';
import logo from './Tre_Jones.jpg';
// material-ui
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';

class Players extends Component {
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
      </div>
      </div>
      </div>
    );
  }
}

const styles = muiBaseTheme => ({
  cardstyle: {
    maxWidth: 10,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  cardmedia: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

Players.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));
export default (Players);

export {
  Players,
};
