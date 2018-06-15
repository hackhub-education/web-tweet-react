import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import SignupForm from './auth/SignupForm'
import LoginForm from './auth/LoginForm'
import Profile from './profile/Profile'
import ProfileForm from './profile/ProfileForm';

class SideBar extends Component {

    handleAuth(Component) {
        return this.props.token ? Component : <Redirect to="/signup" />
    }

    handleIsAuth(Component) {
        if (this.props.token) {
            if (this.props.profile.location && this.props.profile.bio) {
                return <Redirect to="/" />
            } else {
                return <Redirect to="/profile/edit" />
            }

        } else {
            return Component
        }
    }

    render() {
        return (
            <div>
                <Route path='(/|/profile)' exact render={() => (this.handleAuth(<Profile profile={this.props.profile} handleLogout={this.props.handleLogout} />))} />
                <Route path='/profile/edit' render={() => (this.handleAuth(<ProfileForm handleUserUpdate={this.props.handleUserUpdate} profile={this.props.profile} token={this.props.token}/>))} />
                <Route path='/login' render={() => (this.handleIsAuth(<LoginForm handleUserUpdate={this.props.handleUserUpdate} />))} />
                <Route path='/signup' render={() => (this.handleIsAuth(<SignupForm handleUserUpdate={this.props.handleUserUpdate} token={this.props.token} />))} />
            </div>
        );
    }
}

export default SideBar;
