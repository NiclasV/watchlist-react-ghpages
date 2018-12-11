import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Menu extends Component {

  render() {
    return (
      
        <div className="navItem">
          <IconButton 
            onClick={this.handleClick}
            color="inherit" 
            aria-label="Menu">
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
    );  
  }

}


export default Menu;