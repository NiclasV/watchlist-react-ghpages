import React, { Component } from 'react';
import FooterLogo from '../../images/footer_logo.png';
import '../../css/App.css';

class Footer extends Component {

  render() {
    return (
      <footer>
        <img src={FooterLogo} alt="Watchlist-logo" className="foot__logo"/>
        <div className="foot__text">
            <span className="greytext">
                A project by </span><span className="whitetext bold"><a href="http://github.com/niclasv" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Niclas Victorsson</a><br/></span>
                <span className="greytext">Made with React, Material-ui & OMDB API</span><br/>
                <span className="whitetext"><a href="http://obbyone.com" target="_blank" rel="noopener noreferrer">www.obbyone.com</a>
            </span>
        </div>
      </footer>
    );
  }

}

export default Footer;
