import { GET_CATEGORY_DATA, GET_LIST_DATA } from './actionTypes';

export const loadCategoriesDataSync = (categories) => {
    return {
        type: GET_CATEGORY_DATA,
        categories
    }
}

export const loadListDataSync = (list) => {
    return {
        type: GET_LIST_DATA,
        list
    }
}

export const loadCategoriesDataAsync = (dispatch, scroll) => {
    return () => {
        fetch('/mock/cookbook-category.json')
          .then(response => response.json())
          .then(result => {
              dispatch(loadCategoriesDataSync(result.data));
              scroll.refresh();
          })
    }
}

export const loadListDataAsync = (dispatch, scroll) => {
    return () => {
        fetch('/mock/cookbook-list.json')
          .then(response => response.json())
          .then(result => {
              dispatch(loadListDataSync(result.data));
              scroll.refresh();
          })
    }
}



