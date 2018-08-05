//reducer:
import {ADD_COMMENT, FETCH_COMMENTS } from 'store/constans';

const initialState = [];

export function commentsReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT: 
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map((i) => i.name);
            return [...state, ...comments];
        default:
            return state;
    }
}
