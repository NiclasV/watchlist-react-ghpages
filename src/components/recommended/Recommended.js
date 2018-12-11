import React, { Component } from 'react';
import '../../css/App.css';
import Typography from '@material-ui/core/Typography';


export default class Recommended extends Component {

    render() {
        return(
            <div className="background"> 
                <div className="layer">
                    <Typography variant="h1" color="inherit" align="left">
                        We recommend
                    </Typography>
                </div>
            </div>
        );
    }
}