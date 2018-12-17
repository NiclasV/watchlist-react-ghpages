import React, { Component } from 'react';
import '../../css/App.css';
import Typography from '@material-ui/core/Typography';
import OutlinedButton from '../buttons/buttonOutline';
import RecTitle from './subcomp/RecTitle';

export default class Recommended extends Component {

    render() {
        return(
            <div className="background"> 
                <div className="layer">
                    <Typography variant="h1" color="inherit" align="left">
                        We recommend
                    </Typography>
                    <div className="flexboxrec">
                        <RecTitle/>
                        <RecTitle/>
                    </div>
                    <OutlinedButton 
                        buttonColor="secondary"
                        buttonSize="large"
                        buttonText="More recommendations"
                    />
                </div>
            </div>
        );
    }
}