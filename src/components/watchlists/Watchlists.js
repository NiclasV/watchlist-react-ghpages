import React, { Component } from 'react';
import '../../css/App.css';
import Header from './subcomp/Header';
import Watchlist from './subcomp/Watchlist';

const style = {
    padding: "15px"
}
class Watchlists extends Component {

    render() {
        return (
            <div style={style}>
            <Header/>
            <Watchlist/>
            </div>
        );
    }

}

export default Watchlists;
