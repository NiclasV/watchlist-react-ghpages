import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class VertMenu extends React.Component {

  render() {
    const { anchorEl } = this.props.anchorEl;

    return (
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.props.handleClose}
        >
          
          <MenuItem onClick={() => this.props.deleteList(this.props.watchlistid)}>Delete list</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default VertMenu;