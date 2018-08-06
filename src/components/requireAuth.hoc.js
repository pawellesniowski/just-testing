import React, {Component} from 'react';
import { connect } from 'react-redux';


// scaffolds: 
// export default (ChildComponent) => {
//     class ComposedComponent extends Component {
//         render() {
//             return <ChildComponent />;
//         }
//     }
//     return ComposedComponent;
// }

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        // our component just got rendered: 
    componentDidMount() {
        this.shouldNavigateAway();
    }

    // component just got updated: 
    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if(!this.props.loggedIn) {
            this.props.history.push('/');
        }
    }

        render() {
            return <ChildComponent {...this.props}/>
        }
    }

    function mapStateToProps (state) {
        return {
            loggedIn: state.loggedIn
        }
    }
    
    return connect(mapStateToProps, null)(ComposedComponent);
}

// in using it 
// import requireAuthHOC from ...
// class Child ..
// export default requireAuthHOC(Child)