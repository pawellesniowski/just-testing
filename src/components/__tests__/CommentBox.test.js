import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from '../../Root';

let wrapped;
beforeEach(() => {
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

describe("the text area of CommentBox", () => {
    it('has a text area and a 2 buttons', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(2);
    });
    it('has text area that user can type in', () => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
});





