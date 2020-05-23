import { combineReducers } from 'redux';

import list from './components/postlist/listReducer';
import form from './components/postform/formReducer';

export default combineReducers({
    list,
    form
})

