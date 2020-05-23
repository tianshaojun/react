import { GET_CATEGORY_DATA, GET_LIST_DATA } from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    categories: null,
    material: null,
    list: []
})

export default (state=defaultState, action) => {
    if(action.type === GET_CATEGORY_DATA) {
        // return {
        //     ...state,
        //     categories: {...state.categories, ...action.categories.category},
        //     material: {...state.material, ...action.categories.material}
        // }
        let newCate = state.setIn(['categories'], fromJS(action.categories.category));
        let newMat = newCate.setIn(['material'], fromJS(action.categories.material));
        // console.log(newMat)
        return newMat;
    }

    if(action.type === GET_LIST_DATA) {
        // return {
        //     ...state,
        //     list: [...state.list, ...action.list]
        // }
        return state.setIn(['list'], fromJS(action.list));
    }
    return state;
}