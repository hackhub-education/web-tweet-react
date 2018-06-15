import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../config'

import Nav from './Nav';
import TweetList from './tweet/TweetList'
import TweetPost from './tweet/TweetPost';
import SideBar from './Sidebar';

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: [],
            token: '',
            profile: {}
        };
        this.handleNewPost = this.handleNewPost.bind(this)
        this.handleUserUpdate = this.handleUserUpdate.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleUserUpdate(user) {
        this.setState({
            ...user
        })
    }

    handleLogout() {
        this.setState({
            token: ''
        })
    }

    handleNewPost(newPost) {
        let tweets = this.state.tweets
        tweets.unshift({
            createdAt: '2018-06-10T15:37:29.033Z',
            author: {
                avatarUrl: 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/',
                username: 'yan',
                name: 'yan',
            },
            content: newPost,
            _id: Math.random().toString(36).substr(2, 9)
        })
        this.setState({
            tweets
        })
    }

    componentDidMount() {
        axios.get(baseUrl + '/tweet')
            .then(res => {
                const tweets = res.data.tweets
                this.setState({ tweets });
            })
    }

    render() {
        return (
            <div>
                <Nav profile={this.state.profile} token={this.state.token} />
                <div className="container">
                    <SideBar profile={this.state.profile} handleUserUpdate={this.handleUserUpdate} handleLogout={this.handleLogout} token={this.state.token} />
                    <div className="col-3of5 bg-white">
                        {this.state.token && <TweetPost profile={this.state.profile} handleNewPost={this.handleNewPost} />}
                        <TweetList tweets={this.state.tweets} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
