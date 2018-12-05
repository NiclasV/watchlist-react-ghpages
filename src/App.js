import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Search from './components/search/Search';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = { 
        activeTitle: "Title",
      };
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Search/>
      </div>
    );
  }

}

export default App;
