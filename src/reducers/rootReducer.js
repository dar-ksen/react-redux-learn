import {combineReducers} from 'redux';

import characterReducer from './characterReducer';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    characters: characterReducer,
    todos: todoReducer
})

export default rootReducer;