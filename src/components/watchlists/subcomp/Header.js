import React, { Component } from 'react';
import '../../../css/App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateListButton from './CreateListButton';

const header = {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
    marginBottom: "35px",
    marginTop: "15px",
}

export default class Header extends Component {


    render() {
        return (
            <div style={header}>
                <Typography variant="h1" align="left">
                    Your Watchlists
                </Typography>
               <CreateListButton />
            </div>
        );
    }
}