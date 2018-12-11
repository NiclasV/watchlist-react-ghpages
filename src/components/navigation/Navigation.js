import React, { Component } from 'react';
import Login from './subcomp/Login';
import Logo from './subcomp/Logo';
import Menu from './subcomp/Menu';

class Navigation extends Component {

  render() {
    return (
        <div className="nav">
            <Menu/>
            <Logo/>
            <Login
              responseFacebook={this.props.responseFacebook}
              componentClicked={this.props.componentClicked}
              user={this.props.user}
            />
        </div>
    );  
  }

}


export default Navigation;