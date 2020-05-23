import { LOAD } from './actionTypes';

const defaultState = {
    loadList: []
}

export default (state = defaultState, action) => {
    if (action.type === LOAD) {
        return {
            ...state,
            loadList: [...state.loadList, ...action.payload]
        }
    }
    return state
}