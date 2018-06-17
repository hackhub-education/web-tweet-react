import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class TweetDelete extends Component {

    handleDelete() {
        this.props.removeData({
            _id: this.props._id,
            token: this.props.token
        })
    }

    render() {
        return (
            <button onClick={this.handleDelete.bind(this)} className="btn-clear tweet-del"><i className="far fa-trash-alt"></i></button>
        );
    }
}

const mapState = state => ({
    token: state.user.token
})

const mapDispatch = dispatch => ({
    removeData: deleteTweet => dispatch.tweets.removeData(deleteTweet),
})

export default withRouter(connect(mapState, mapDispatch)(TweetDelete));