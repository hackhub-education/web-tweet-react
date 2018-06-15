import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ProfileAction from './ProfileAction'

class Profile extends Component {

    render() {
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src={this.props.avatar} alt="avatar" />
                <h3>Yan Hong</h3>
                <h5>@honlyan</h5>
                <h4><i className="fas fa-map-marker-alt"></i> Vancouver</h4>
                <p className="center">Director of EduHacks * Digital Ocean Vancouver Meetup Co-organizer * CEO of HackHub * Founder of Inverse Technology Inc.</p>
                <Route path='/profile' render={() => <ProfileAction handleLogout={this.props.handleLogout} /> } /> 
            </div>
        );
    }
}

export default Profile;
