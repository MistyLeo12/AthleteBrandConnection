import React, { Component } from 'react';
import logo from './Tre_Jones.jpg';
// material-ui
import { withStyles } from '@material-ui/core/styles'
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

class Players extends Component {
    state = {
    open: false,
   };

  render() {
    return (
      <Paper>
      <Card maxWidth = "5">
      <CardActionArea>
      <CardMedia
      component="img"
      height="100"
      maxWidth="150"
      className = "Media"
      image = { logo }
      title="Contemplative Reptile"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      Tre Jones
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      Tre Jones is on the Duke University Men's Basketball Team and is well known for ...
      </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
      Share
      </Button>
      <Button size="small" color="primary">
      Learn More
      </Button>
      </CardActions>
      </Card>
      </Paper>
    );
  }
}

Players.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));
export default (Players);

export {
  Players,
};
