import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';




it('should show Comment Box component', () => {
    const div = document.createElement('div'); // creatin a fake div
    ReactDOM.render(<App />, div); // render in this fake div
    // now check what is going on..
    expect(div.innerHTML).toContain('Comment box');
    ReactDOM.unmountComponentAtNode(div);
});

it('should show Comment List component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    expect(div.innerHTML).toContain('CommentList');
    ReactDOM.unmountComponentAtNode(div)
});

























