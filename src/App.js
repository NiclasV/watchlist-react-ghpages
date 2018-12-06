import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Search from './components/search/Search';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
          isLoggedIn: '',
          userID: '',
          name: '',
          email: '',
          picture: ''
      };
  }

  componentClicked = () => console.log('clicked');

  responseFacebook = (response) => {
      this.setState({
          isLoggedIn: true,
          userID: response.id,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url,
      })
  }

  render() {
    return (
      <div className="App">
        <Navigation
          responseFacebook={this.responseFacebook}
          componentClicked={this.componentClicked}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Search/>
      </div>
    );
  }

}

export default App;
