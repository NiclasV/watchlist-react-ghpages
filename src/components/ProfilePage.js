import React, { Component } from 'react';
import ProfileImage from './profilepage/ProfileImage';
import ProfileCard from './profilepage/ProfileCard';
import Watchlists from './watchlists/Watchlists'
import '../css/App.css';

class ProfilePage extends Component {
  
  componentDidMount() {
      this.props.switchWatchlistType("profilepage")
  }

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
          getWatchlists={this.props.getWatchlists}
          userID={this.props.userInfo.userID}
          switchWatchlistType={this.props.switchWatchlistType}
          fullWatchlist={this.props.fullWatchlist}
          activeWatchlist={this.props.activeWatchlist}
          watchlistType={this.props.watchlistType}
        />
      </div>
    );
  }

}

export default ProfilePage;
