import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentList extends Component {

    renderComments() {
        return (
            this.props.comments.map((comment) => {
                return <li key={Math.random()}>{comment}</li>
            })
        )
    }

    render() {
        console.log(this.props)
        return (
            <ul>
                {this.renderComments()}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        fetchedComments: state.fetchedComments
    }
}

export default connect(
    mapStateToProps, null
)(CommentList)