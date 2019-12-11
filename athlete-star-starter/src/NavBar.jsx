import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles'
import { CardMedia, Avatar, Typography, Toolbar, Grid, Button, AppBar, SwipeableDrawer, IconButton, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import { MailIcon, AccountCircle, InboxIcon } from '@material-ui/icons/';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu/';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TypoGraphy from '@material-ui/core/Typography'
import { Home, Book, AccountBox } from '@material-ui/icons'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import logo from './ncaalogo.png'


firebase.initializeApp({
    apiKey: "AIzaSyDy1LlgOmltOLOjfsisTBWuKH9XrCfWMa4",
    authDomain: "athlete-market.firebaseapp.com",
    databaseURL: "https://athlete-market.firebaseio.com",
    projectId: "athlete-market",
    storageBucket: "athlete-market.appspot.com",
    messagingSenderId: "370761758459",
    appId: "1:370761758459:web:7e7a74d2d292b61ac6a25e",
    measurementId: "G-QWJLD6YH8F"
  });


class NavBar extends Component {
  state={isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log("user", user)
    })
  }
   //Opening Side Handler
   handleDrawerOpen = () => {
     this.setState({ open: true });
   };


   //Closing Side Handler
    handleDrawerClose = () => {
      this.setState({ open: false });
    };

  render() {
    const { user, classes, logout } = this.props;
    return (
      <div>
      <AppBar style={{ background: '#2E3B55' }} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <img src={logo} height="50" width="50" />
            &nbsp;
            &nbsp;
            <Typography variant="h6">
              Athlete Brand Network
            </Typography>
            <List component="nav">
            <ListItem component="div" >
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <Button color="inherit" component={Link} to="/"> Home </Button>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <Button color="inherit" component={Link} to="/schools"> Schools </Button>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <Button color="inherit" component={Link} to="/athletes" > Athletes </Button>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    {this.state.isSignedIn ?

                    <Button color="inherit" onClick={() => {firebase.auth().signOut(); this.forceUpdate()}} component={Link} to="/login">Sign Out</Button>


                      :

                    <Button color="inherit" component={Link} to="/login">Login</Button>

                    }
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
            </List>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));
export default (NavBar);

export {
  NavBar,
};
