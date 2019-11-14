import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles'
import { Avatar, Typography, Toolbar, Grid, Button, AppBar, SwipeableDrawer, IconButton, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import { MailIcon, AccountCircle, InboxIcon } from '@material-ui/icons/';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu/';

class NavBar extends Component {
    state = {
    open: false,
   };

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
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6">
            NCAA Athlete Brand Network
            </Typography>
            <Button color="inherit">Login</Button>
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
