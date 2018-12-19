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
          lists={this.props.watchlists.length}
        />
        <Watchlists
          watchlists={this.props.watchlists}
          handleChange={this.props.handleChange}
          createList={this.props.createList}
          page="profilepage"
        />
      </div>
    );
  }

}

export default ProfilePage;
