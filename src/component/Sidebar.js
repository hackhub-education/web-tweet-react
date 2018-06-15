import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './auth/LoginForm'
import Profile from './profile/Profile'
import ProfileForm from './profile/ProfileForm';

class SideBar extends Component {

    render() {
        return (
            <div>
                <Route path='/' exact render={() => <Profile avatar={this.props.avatar}/>} />                
                <Route path='/profile' exact render={() => <Profile avatar={this.props.avatar}/>} />
                <Route path='/profile/edit' render={() => <ProfileForm avatar={this.props.avatar}/>} />
                <Route path='/login' component={LoginForm} />
            </div>
        );
    }
}

export default SideBar;
