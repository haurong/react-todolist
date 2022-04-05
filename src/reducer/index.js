import { combineReducers } from 'redux';
import todosReducer from './todos';

const todoApp = combineReducers({
    todosReducer
});

export default todoApp;