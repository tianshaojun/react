import { ADD } from './actionTypes';

const defaultState = {
    postList: []
}

export default (state = defaultState, action) => {
    if (action.type === ADD) {
        return {
            ...state,
            postList: [...state.postList, action.payload]
        }
    }
    return state
}