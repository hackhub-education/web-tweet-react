import React, { Component } from 'react';
import moment from 'moment';

import { Route } from 'react-router-dom';

import TweetDelete from './TweetDelete'

class TweetItem extends Component {
    render() {
        return (
            <div className="tweet">
                <div className="row relative">
                    <img className="tweet-avatar" src={this.props.value.author.avatarUrl} alt="avatar" />
                    <h4><b>{this.props.value.author.name}</b></h4>
                    <h5>@{this.props.value.author.username}</h5>
                    <h5>{moment(this.props.value.createdAt).calendar()}</h5>
                    <Route path="/profile" render={()=><TweetDelete _id={this.props.value._id} token={this.props.token} handleDeletePost={this.props.handleDeletePost} />}/>
                </div>
                <p>{this.props.value.content}</p>
            </div>
        );
    }
}

export default TweetItem;
