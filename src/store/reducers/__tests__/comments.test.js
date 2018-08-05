import { commentsReducer } from 'store/reducers/comments';
import { ADD_COMMENT } from 'store/constans';


it('handles actions of type ADD_COMMENT', () => {
    const action = {
        type: ADD_COMMENT,
        payload: "New Comment"
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(["New Comment"]);
});