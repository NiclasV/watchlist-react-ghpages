import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class RecTitle extends Component {
    trimPlot = (props) => {
        let plot = this.props.recommendedTitle.plot;
        if (plot.length > 150) {
            plot = plot.substring(0, 150) + "...";
        }

        return plot;
    }

    render() {
        
        var stylee = {
            backgroundImage: 'url(' + this.props.recommendedTitle.poster + ')'
        }

        return(
            <div className="recTitle">
                <div className="recTitle__poster" style={stylee}>
                </div>
                <Typography color="secondary" variant="h4">
                {this.props.recommendedTitle.movietitle}
                </Typography>
                <p className="recTitle__year">{this.props.recommendedTitle.year}</p>
                <p className="recTitle__genres">{this.props.recommendedTitle.genres}</p> 
                {this.trimPlot()}
            </div>
        );

    }
}