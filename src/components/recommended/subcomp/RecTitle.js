import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class RecTitle extends Component {

    render() {
        return(
            <div className="recTitle">
                <img src={this.props.poster} alt="movie poster" className="recTitle__poster"/>
                <Typography color="secondary" variant="h4">
                {this.props.title}
                </Typography>
                <p className="recTitle__year">({this.props.year})</p>
                <p className="recTitle__genres">{this.props.genres}</p> 

            </div>
        );
    }
}