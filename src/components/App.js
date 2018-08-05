import React, {Component} from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { Auth } from 'store/actions';


class App extends Component {
    renderButton() {
        return (
            <button onClick={() => this.props.toggleLogging(this.props)}>
                {this.props.loggedIn? "Log Out" : "Log In"}
            </button>
        );
    }

    renderHeader() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Post A Comment</Link></li>
                    <li>{this.renderButton()}</li>
                </ul>
            </nav>
        );
    }

    render() {

        console.log(this.props)
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        loggedIn: state.loggedIn
    }
}

function mapDispatchToProps (dispatch) {
    return {
        toggleLogging: ({loggedIn}) => {
            dispatch(Auth(!loggedIn))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


