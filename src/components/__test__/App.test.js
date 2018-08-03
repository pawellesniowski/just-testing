import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import { CommentBox } from '../CommentBox';
import { CommentList } from '../CommentList';

it('should show commet Box', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('should show Comment List component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
});




















