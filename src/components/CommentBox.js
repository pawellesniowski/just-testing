import React, { Component } from 'react';
import requireAuthHOC from 'components/requireAuth.hoc.js'

// adds redux:
import { connect } from 'react-redux';
import * as actions from 'store/actions';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
    }

    handleTextareaChange = (e) => {
        this.setState({comment: e.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.SaveComment(this.state.comment);
        this.setState({comment: ''});
    }

    handleFetchComments = () => {
        this.props.FetchComments();
    }

    render() {

        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add Comment</h4>
                    <textarea 
                        onChange={this.handleTextareaChange}
                        value={this.state.comment}
                        placeholder="Add your comment!"
                    />
                        <div>
                            <button type='submit'>Add Comment</button>
                        </div>
                </form>
                <button onClick={this.handleFetchComments}>Fetch Comments</button>
            </div>
        );
    }
}

export default connect(null, actions)(requireAuthHOC(CommentBox));
