import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config'

class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarUrl: props.profile.avatarUrl,
            location: props.profile.location,
            bio: props.profile.bio,
            name: props.profile.name
        }
    }

    render() {
        return (
            <div className="col-2of5 bg-white profile">
                <div class="relative img-edit">
                    <img class="avatar" src={this.state.avatarUrl} alt="avatar" id="avatar-image" />
                    <img class="avatar-upload" src="/img/upload.png" alt="upload-img" />
                </div>
                <input class="input-profile" type="text" value={this.state.name} placeholder="Full name" />
                <h5 id="username">@{this.props.profile.username}</h5>
                <input class="input-profile" type="text" value={this.state.location} placeholder="Location" />
                <textarea class="input-profile" placeholder="Personal Bio">{this.state.bio}</textarea>
                <button class="btn-primary space-top" type="button" id="save-btn">Save</button>
                <button class="btn-border space-top" type="button" id="cancel-btn">Cancel</button>
            </div>
        );
    }
}

export default ProfileForm;