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
            <div className="watchlist">
                <Card raised="true">
                    <CardHeader 
                    action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.props.title}
                    subheader={this.props.description}
                    titleTypographyProps={{align:"left"}}
                    subheaderTypographyProps={{align:"left"}}
                    /> 
                    <HrTitles/>
                    <CardContent>
                    
                    </CardContent>
                </Card>
            </div>
        );
    }
}
