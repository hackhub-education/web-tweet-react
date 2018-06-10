import React, { Component } from 'react';
import axios from 'axios';

class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
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
            <div>
                {this.state.tweets.map((tweet) => {
                    return (
                        <div className="tweet" key={tweet._id}>
                            <div className="row relative">
                                <img className="tweet-avatar" src={tweet.author.avatarUrl} alt="avatar" />
                                <h4><b>{tweet.author.name}</b></h4>
                                <h5>@{tweet.author.username}</h5>
                                <h5>{tweet.createdAt}</h5>
                            </div>
                            <p>{tweet.content}</p>
                        </div>
                    )
                }
                )}
            </div>
        );
    }
}

export default TweetList;
