import { ADD_COMMENT, FETCH_COMMENTS, LOGGED_IN } from 'store/constans.js';
import Axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/comments';


export function SaveComment (comment) {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export function FetchComments () {
    const respone = Axios.get(url);
    return {
        type: FETCH_COMMENTS,
        payload: respone
    }
}

export function Auth (isLoggedIn) {
    return {
        type: LOGGED_IN,
        payload: isLoggedIn
    }
}
