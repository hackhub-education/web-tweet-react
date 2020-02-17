import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from './Nav';
import TweetList from './tweet/TweetList'
import TweetPost from './tweet/TweetPost';
import SideBar from './Sidebar';

class Page extends Component {
    constructor(props) {
        super(props)
        this.handleNewPost = this.handleNewPost.bind(this)
        this.handleDeletePost = this.handleDeletePost.bind(this)
    }

    handleNewPost(newPost) {
        let tweets = [...this.state.tweets, newPost]
        this.setState({
            tweets
        })
    }

    handleDeletePost(tweetId) {
        let tweets = this.state.tweets
        let newTweets = tweets.filter(function(tweet) {
            return tweet._id !== tweetId;
        });
        this.setState({
            tweets: newTweets
        })
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
                    <SideBar handleUserUpdate={this.handleUserUpdate} handleLogout={this.handleLogout}/>
                    <div className="col-3of5 bg-white">
                        {this.props.token && <TweetPost handleNewPost={this.handleNewPost}/>}
                        <TweetList handleDeletePost={this.handleDeletePost}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = state => ({
  token: state.user.token
})

export default withRouter(connect(mapState, null)(Page));
