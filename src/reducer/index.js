import { combineReducers } from 'redux';
import todosReducer from './todos';
import filterReducer from './filter';

const todoApp = combineReducers({
    filterReducer,
    todosReducer
});

export default todoApp;