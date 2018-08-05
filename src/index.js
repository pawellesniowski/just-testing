import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// redux:
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from 'store/reducers';
// const store = createStore(rootReducer, {});
import Root from 'Root';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById("root")
);
