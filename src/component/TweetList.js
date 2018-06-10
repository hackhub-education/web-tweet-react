import React, { Component } from 'react';
import axios from 'axios';

import TweetItem from './TweetItem'

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
                {this.state.tweets.map((tweet) => <TweetItem value={tweet} key={tweet._id}/>)}
            </div>
        );
    }
}

export default TweetList;
