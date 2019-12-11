import React, { Component } from 'react';
import logo from './pictures/Duke-Basketball-logo.png';
// material-ui
import { Paper, Image, Typography, Button, Card, CardActions, CardMedia, CardActionArea, CardContent } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { db } from "./fire"

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      
      schools: [],
      image: [],
      page: 0,
      rowsPerPage: 10
    }
  }


  
  componentDidMount() {
    db.collection("Schools")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ schools: data });
      });

  }


  render() {
    const { schools } = this.state;
    console.log(schools.picture);
    return (
  
     
      <Paper>
        {schools.map(school=>(
        <Card className="our-team">
          <CardActionArea className="university">
            <br />
            <CardContent className="team-content">
         
            <Typography className="name" gutterBottom variant="h5" component="h2">
             
              </Typography>
              <Typography className="title" variant="body2" color="textSecondary" component="p">
              {school.fullName}
              </Typography> 
            </CardContent>
       
          </CardActionArea>

        </Card>
        ))}
      </Paper>
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

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));
export default (Cards);

export {
  Cards,
};
