import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux'

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
                <Route path='(/|/profile)' exact render={() => (this.handleAuth(<Profile profile={this.props.profile} />))} />
                <Route path='/profile/edit' render={() => (this.handleAuth(<ProfileForm handleUserUpdate={this.props.handleUserUpdate} profile={this.props.profile} token={this.props.token}/>))} />
                <Route path='/login' render={() => (this.handleIsAuth(<LoginForm />))} />
                <Route path='/signup' render={() => (this.handleIsAuth(<SignupForm />))} />
            </div>
        );
    }
}

const mapState = state => ({
  profile: state.user.profile,
  token: state.user.token
})

export default withRouter(connect(mapState, null)(SideBar));
