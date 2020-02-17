import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProfileAction extends Component {

    render() {
        return (
            <div className="profile-action">
                <Link className="btn-border space-top" to="/profile/edit">Edit profile</Link>
                <button className="btn-border space-top" onClick={this.props.logout}>Log out</button>
            </div>
        );
    }
}

const mapDispatch = dispatch => ({
  logout: () => dispatch.user.logout()
})

export default connect(null, mapDispatch)(ProfileAction);
