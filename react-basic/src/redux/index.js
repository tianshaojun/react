const { createStore } = require('redux');

const defaultState = {
    count: 0
}

const reducer = (state = defaultState, action) => {
    // redux会在开始的时候执行一次reducer, action.type = '@@redux/INITk.m.u.a.k.l'
    if (action.type === 'increment') {
        return {
            count: state.count + action.payload
        }
    }
    return state
}

const store = createStore(reducer);

// subscribe是个订阅函数，它在状态发生变化的时候，自动调用
store.subscribe(() => {
    console.log(store.getState());
});

// 调用store.dispatch, 会再次执行reducer
setInterval(() => {
    store.dispatch({
        type: 'increment',
        payload: 4
    })
},1000);
// console.log(store.getState());

