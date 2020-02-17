import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import TweetItem from './TweetItem'

class TweetList extends Component {

    componentDidMount() {
      this.props.fetchTweets()
    }

    render() {
        return (
            <div>
                <Route path='/profile' render={() => (this.props.tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet =>  tweet.author._id === this.props.profile._id ? <TweetItem value={tweet} key={tweet._id} handleDeletePost={this.props.handleDeletePost} /> : ''))} />
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
  tweets: state.tweets
})

const mapDispatch = dispatch => ({
  fetchTweets: () => dispatch.tweets.fetchTweets()
})

export default connect(mapState, mapDispatch)(TweetList);
