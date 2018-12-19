import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  
class Facebook extends Component {
    state = {
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };
    
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    
    render() {
        
        let fbContent;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        

        if(this.props.user.isLoggedIn === true) {
            fbContent = (
                <div>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <AccountCircle 
                            fontSize="large"
                        />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}><a href="/ProfilePage">My profile</a></MenuItem>
                    </Menu>

              </div>
            ); 
        } else {
            fbContent = (
                <FacebookLogin
                    appId="2007701916194555"
                    autoLoad={true}
                    textButton=" Login"
                    fields="name,email,picture.type(large)"
                    onClick={this.props.componentClicked}
                    callback={this.props.responseFacebook} 
                    icon="fa-facebook"
                    size="small"
                />
            );
        };

        return (
            <div className="navItem">
                {fbContent}
            </div> 
        );  
    }
}

Facebook.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Facebook);