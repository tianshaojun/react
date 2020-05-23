import { createStore } from 'redux';

const defaultState = 10;

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1 < 1 ? 1 : state - 1;
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;

