import React, { Component } from 'react';
import '../../css/App.css';
import Typography from '@material-ui/core/Typography';
import OutlinedButton from '../buttons/buttonOutline';
import RecTitle from './subcomp/RecTitle';
import SicarioPoster from '../../images/sicarioposter.jpg';
import WindRiverPoster from '../../images/windriverposter.jpg';

export default class Recommended extends Component {

    render() {
        return(
            <div>
                <div className="background"> 
                    <div className="layer">
                        <Typography variant="h1" color="inherit" align="left">
                            We recommend
                        </Typography>
                        <div className="flexboxrec">
                            <RecTitle 
                                poster={SicarioPoster}
                                title="Sicario" 
                                genres="Action, Crime, Drama"
                                year="2015"
                            />
                            <RecTitle
                                poster={WindRiverPoster}
                                title="Wind River" 
                                genres="Crime, Drama, Mystery"
                                year="2017"
                            />
                        </div>
                        
                    </div>
                    
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