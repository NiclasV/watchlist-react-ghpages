import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import AccountCircle from '@material-ui/icons/AccountCircle';

class Facebook extends Component {

    render() {
        let fbContent;

        if(this.props.isLoggedIn) {
            fbContent = (
                <AccountCircle/>
            ); 
        } else {
            fbContent = (
                <FacebookLogin
                    appId="2007701916194555"
                    autoLoad={false}
                    textButton=" Login"
                    fields="name,email,picture"
                    onClick={this.props.componentClicked}
                    callback={this.props.responseFacebook} 
                    icon="fa-facebook"
                    size="small"
                />
            );
        };

        return (
            <div className="navItem">
                {fbContent}
            </div> 
        );  
    }

}


export default Facebook;