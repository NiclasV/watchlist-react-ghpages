import React, { Component } from 'react';
import mainLogo from '../../../images/logo.png'

class Logo extends Component {

  render() {
    return (
        <div className="navItem__logo navItem">
            <div className="nav__logo">
                <img src={mainLogo} className="img-fluid" alt="logotype"/>
            </div>
        </div>
    );  
  }

}

export default Logo;