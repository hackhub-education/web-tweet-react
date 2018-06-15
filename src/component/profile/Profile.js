import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ProfileAction from './ProfileAction'

class Profile extends Component {

    render() {
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src={this.props.profile.avatarUrl} alt={this.props.profile.username} />
                <h3>{this.props.profile.name}</h3>
                <h5>@{this.props.profile.username}</h5>
                {this.props.profile.location && <h4><i className="fas fa-map-marker-alt"></i> {this.props.profile.location}</h4>}
                <p className="center">{this.props.profile.bio}</p>
                <Route path='/profile' render={() => <ProfileAction handleLogout={this.props.handleLogout} /> } /> 
            </div>
        );
    }
}

export default Profile;
