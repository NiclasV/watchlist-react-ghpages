import React, { Component } from 'react';
import './App.css';


class Navigation extends Component {

  render() {
    return (
      <nav>
        <Menu />
        <Loginfield />
      </nav>
    );
  }

}
class Menu extends Component {

  render() {
    return (
      <div>
        MENU
      </div>
    );
  }

}

class Loginfield extends Component {

  render() {
    return (
      <div>:LOGIN:</div>
    );
  }

}

class Search extends Component {

  render() {
    return (
      <div>Watchlists Bruh</div>
    );
  }

}

class SearchField extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
      </form>
    );
  }

}

class Watchlists extends Component {

  render() {
    return (
      <div>Watchlists Bruh</div>
    );
  }

}

class Movietips extends Component {

  render() {
    return (
      <div>Movie Recommendations</div>
    );
  }

}

class Footer extends Component {

  render() {
    return (
      <footer>That footer tho</footer>
    );
  }

}

class Logo extends Component {

  render() {
    return (
      <div>A FOREIGN BRISK, THATS MY CUP OF TEA yea</div>
    );
  }

}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Watchlists />
        <Movietips />
        <Footer />
      </div>
    );
  }

}


export default App;
