import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import TweetItem from './TweetItem'

class TweetList extends Component {
    render() {
        const {
            tweets,
            profile
        } = this.props;
        
        return (
            <Switch>
                <Route path='/profile/edit' render={() => <div className="fade-cover"></div>} />
                <Route path='/profile' render={() => tweets
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map(tweet => tweet.author._id === profile._id && <TweetItem value={tweet} key={tweet._id} />)} />
                <Route path='/' render={() => tweets
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map(tweet => <TweetItem value={tweet} key={tweet._id} />)} />
            </Switch>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    tweets: state.tweets
})


export default withRouter(connect(mapState)(TweetList));
