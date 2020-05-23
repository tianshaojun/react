const { createStore } = require('redux');

const defaultState = {
    count: 0
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'add') {
        return {
            count: state.count + 1
        }
    }
    return state
}

const store = createStore(reducer);

//获取状态值
console.log(store.getState().count);

store.dispatch({ type: 'add' });
console.log(store.getState().count);

store.dispatch({ type: 'add' });
console.log(store.getState().count);




