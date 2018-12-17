import React, { Component } from 'react';
import ProfileImage from './profilepage/ProfileImage';
import ProfileCard from './profilepage/ProfileCard';
import Watchlists from './watchlists/Watchlists'
import '../css/App.css';

class ProfilePage extends Component {

  render() {
    return (
      <div className="mainContent">
        <ProfileImage
          userInfo={this.props.userInfo}
        />
        <ProfileCard
          name={this.props.userInfo.name}
        />
        <Watchlists
          
        />
      </div>
    );
  }

}

export default ProfilePage;
