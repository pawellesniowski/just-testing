import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// router
import { BrowserRouter, Route } from 'react-router-dom';


// redux:
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from 'store/reducers';
// const store = createStore(rootReducer, {});
import Root from 'Root';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.getElementById("root")
);
