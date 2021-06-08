import {combineReducers} from 'redux';

import characterReducer from './characterReducer';
import counterReducer from './counterReducert';

const rootReducer = combineReducers({
    counter: counterReducer,
    characters: characterReducer
})

export default rootReducer;