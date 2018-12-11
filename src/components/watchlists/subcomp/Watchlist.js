import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HrTitles from './HrTitles';

export default class Watchlist extends Component {

    render() {

        return(
            <div>
                <Card>
                    <CardHeader 
                    action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                    }
                    title="Movies to Watch"
                    subheader="A collection of movies to watch"
                    titleTypographyProps={{align:"left"}}
                    subheaderTypographyProps={{align:"left"}}
                    /> 
                    <HrTitles/>
                    <CardContent>
                    
                        WHAT
                    </CardContent>
                </Card>
            </div>
        );
    }
}