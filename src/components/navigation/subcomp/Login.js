import React, { Component } from 'react';
import Facebook from './Facebook';

class Login extends Component {

  render() {
    return (
        <div className="navItem">
            <Facebook
              responseFacebook={this.props.responseFacebook}
              componentClicked={this.props.componentClicked}
              isLoggedIn={this.props.isLoggedIn}
            />
        </div>
    );  
  }

}


export default Login;