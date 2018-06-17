import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import TweetItem from './TweetItem'

class TweetList extends Component {

    render() {
        return (
            <div>
                <Route path='/profile' render={() => (this.props.tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet =>  tweet.author._id === this.props.profile._id ? <TweetItem value={tweet} key={tweet._id} /> : ''))} />
                <Route path='(/|/login|/signup)' exact render={() => (this.props.tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet => <TweetItem value={tweet} key={tweet._id} />))} />
                 <Route path='/profile/edit' render={() =>  <div className="fade-cover"></div>} />
            </div>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token,
    tweets: state.tweets
})

const mapDispatch = dispatch => ({
    postData: () => dispatch.tweets.postData(),
})

export default withRouter(connect(mapState, mapDispatch)(TweetList));
