import React, { Component } from 'react';
import logo from './Duke-Basketball-logo.png';
// material-ui
import { withStyles } from '@material-ui/core/styles'
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

class Cards extends Component {
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
      Duke University Men's Basketball
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      Duke University Men's Basketball is well known for their head coach Mike Krzyzewski and have 5 National titles under their belt.
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

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));
export default (Cards);

export {
  Cards,
};
