import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked = () => console.log('clicked');

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.id,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        })
    }

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = null; 
        } else {
            fbContent = (
                <FacebookLogin
                    appId="2007701916194555"
                    autoLoad={false}
                    textButton=" Login"
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                    icon="fa-facebook"
                    size="small"
                />
            );
        };

        return (
            <div className="navItem">
                {fbContent}
                {console.log(this.props.isLoggedIn)}
            </div> 
        );  
    }

}


export default Facebook;