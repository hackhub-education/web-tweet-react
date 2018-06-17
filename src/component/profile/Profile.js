import React, { Component } from 'react';
import { Route , withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import ProfileAction from './ProfileAction'

class Profile extends Component {

    render() {
        let props = this.props
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src={props.profile.avatarUrl} alt={props.profile.username} />
                <h3>{props.profile.name}</h3>
                <h5>@{props.profile.username}</h5>
                {props.profile.location && <h4><i className="fas fa-map-marker-alt"></i> {props.profile.location}</h4>}
                <p className="center">{props.profile.bio}</p>
                <Route path='/profile' render={() => <ProfileAction /> } /> 
            </div>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token
})

const mapDispatch = dispatch => ({
    logout: () => dispatch.user.logout(),
})

export default withRouter(connect(mapState, mapDispatch)(Profile));
