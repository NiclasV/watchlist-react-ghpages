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
            <Login/>
        </div>
    );  
  }

}


export default Navigation;