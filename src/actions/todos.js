import { type } from '@testing-library/user-event/dist/type';
import * as types from './ActionTypes';

export function addTask (taskName){
    return{
        type: types.ADD_TASK,
        taskName
    };
}