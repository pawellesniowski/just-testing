import React, { Component } from 'react';

export class CommentBox extends Component {
    render() {
        return (
            <div> Comment box
                <input type="text" />
                <button>Add Comment</button>
            </div>
        )
    }
}