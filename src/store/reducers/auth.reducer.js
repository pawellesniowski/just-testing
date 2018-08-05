import { LOGGED_IN } from 'store/constans';

const initialState = false;

export function authReducer (state = initialState, action) {
    switch(action.type){
        case LOGGED_IN:
            return action.payload;     
        default:
            return state;
    }
}