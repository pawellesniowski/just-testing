import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import Root from 'Root';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
})

it('should show commet Box', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
});


it('should show Comment List Component', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
});


