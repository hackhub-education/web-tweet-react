import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProfileAction extends Component {

    render() {
        return (
            <div className="profile-action">
                <Link className="btn-border space-top" to="/profile/edit">Edit profile</Link>
                <button className="btn-border space-top" onClick={this.props.handleLogout}>Log out</button>
            </div>
        );
    }
}

export default ProfileAction;
