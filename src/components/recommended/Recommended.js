import React, { Component } from 'react';
import '../../css/App.css';
import Typography from '@material-ui/core/Typography';
import OutlinedButton from '../buttons/buttonOutline';
import RecTitle from './subcomp/RecTitle';

export default class Recommended extends Component {
    
    buildTitles = () => {
        if(this.props.recommendedTitles) {
            var first = this.props.recommendedTitles.length - 1;
            var second = this.props.recommendedTitles.length - 2;

            return (
                <div className="flexboxrec">
                    {/* {console.log(this.props.recommendedTitles[second])} */}
                <RecTitle 
                    recommendedTitle={this.props.recommendedTitles[first]}
                />
                <RecTitle
                    recommendedTitle={this.props.recommendedTitles[second]}
                />
                </div>
            );
        } 
    }
    render() {
        return(
            <div>
                <div className="background"> 
                        <Typography variant="h1" color="inherit" align="left">
                            We recommend
                        </Typography>
                        {this.buildTitles()}
                </div>
                    <OutlinedButton 
                    buttonColor="secondary"
                    buttonSize="large"
                    buttonText="More recommendations"
                />
            </div>
        );
    }
}