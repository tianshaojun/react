// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer as cookbook } from 'pages/cookbook';
import { reducer as menu } from 'pages/menu';

export default combineReducers({
    cookbook,
    menu
})
