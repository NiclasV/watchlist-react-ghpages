import React, { Component } from 'react';

class HrTitles extends Component {
    render() {
        return (
            <div className="strike">
                <span>{this.props.titles} titles in list</span>
            </div>
        )
    }
}

export default HrTitles;