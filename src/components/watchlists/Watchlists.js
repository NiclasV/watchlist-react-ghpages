import React, { Component } from 'react';
import '../../css/App.css';
import Header from './subcomp/Header';
import Watchlist from './subcomp/Watchlist';
import OutlinedButton from '../buttons/buttonOutline';

const style = {
    padding: "15px"
}

class Watchlists extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    
    render() {
            return (
                <div style={style}>
                    <Header/>
                    <Watchlist
                        title={this.props.watchlists[0].title}
                        description={this.props.watchlists[0].description}   
                    />
                    <OutlinedButton
                        buttonText="See all lists"
                        buttonSize="large"
                        buttonColor="primary"
                    />
                </div>
            );
    }
}

export default Watchlists;
