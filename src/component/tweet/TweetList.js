import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TweetItem from './TweetItem'

class TweetList extends Component {

    render() {
        return (
            <div>
                <Route path='/profile' render={() => (this.props.tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet =>  tweet.author._id === this.props.profile._id ? <TweetItem value={tweet} key={tweet._id} token={this.props.token} handleDeletePost={this.props.handleDeletePost} /> : ''))} />
                <Route path='(/|/login|/signup)' exact render={() => (this.props.tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet => <TweetItem value={tweet} key={tweet._id} />))} />
                 <Route path='/profile/edit' render={() =>  <div className="fade-cover"></div>} />
            </div>
        );
    }
}

export default TweetList;
