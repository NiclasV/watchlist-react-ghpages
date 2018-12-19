import React, { Component } from 'react';
import Div from '../../styles/search';
import Avatar from './Avatar';

class ProfileImage extends Component {

  render() {
    return (
      <div>
        <Div profile="true">
        </Div>
        <Avatar 
          userPic={this.props.userInfo.picture}  
          userName={this.props.userInfo.name}
        />
  
      </div>
    );  
  }

}


export default ProfileImage;