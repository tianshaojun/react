import { LOAD } from './actionTypes';

export const loadDataPlain = (payload) => {
    return {
        type: LOAD,
        payload
    }
}

export const loadData = (dispatch) => {
    return () => {
        setTimeout(() => {
           dispatch(loadDataPlain(['ddd']));
        }, 2000)
    }
}