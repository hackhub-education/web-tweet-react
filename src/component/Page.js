import React, { Component } from 'react';
import axios from 'axios';

import TweetList from './TweetList'
import TweetPost from './TweetPost';
import SideBar from './Sidebar';

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: []
        };
        this.handleNewPost = this.handleNewPost.bind(this)        
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
            tweets: tweets
        })
    }

    componentDidMount() {
        axios.get(`http://tweet-api.webdxd.com/tweet`)
            .then(res => {
                const tweets = res.data.tweets
                this.setState({ tweets });
            })
    }

    render() {
        return (          
            <div className="container">
                <SideBar avatar={this.props.avatar}/>
                <div className="col-3of5 bg-white">
                    <TweetPost avatar={this.props.avatar} handleNewPost={this.handleNewPost} />
                    <TweetList tweets={this.state.tweets} />
                </div>
            </div>
        );
    }
}

export default Page;
