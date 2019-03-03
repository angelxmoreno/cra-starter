import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { observer, inject } from "mobx-react"

@inject('authStore') @observer
class FacebookBtn extends Component {
    responseFacebook = (response) => {
        if (response.name) {
            this.props.authStore.login(response);
        }
    }

    handleLogin(response) {
        this.props.authStore.login(response);
    }

    handleLogout() {
        this.props.authStore.logout();
    }

    render() {
        return this.props.authStore.isLoggedIn
            ? <button onClick={this.handleLogout.bind(this)}>{this.props.authStore.userName}</button>
            : <FacebookLogin
                appId={process.env.REACT_APP_APP_ID}
                autoLoad
                callback={this.handleLogin.bind(this)}
                icon="fa-facebook"
                size="small"
            />
    }
}

export default FacebookBtn;