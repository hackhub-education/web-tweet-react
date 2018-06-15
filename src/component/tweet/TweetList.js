import React, { Component } from 'react';

import TweetItem from './TweetItem'

class TweetList extends Component {

    render() {
        return (
            <div>
                {this.props.tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet => <TweetItem value={tweet} key={tweet._id}/>)}
            </div>
        );
    }
}

export default TweetList;
