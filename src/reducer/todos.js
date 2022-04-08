import { type } from '@testing-library/user-event/dist/type';
import * as types from '../actions/ActionTypes';


const initialTasks = [
    { taskName: 'task1',isCompleted: false },
    { taskName: 'task2',isCompleted: true },
    { taskName: 'task3',isCompleted: false },
];

export default function todos(state = initialTasks, action) {
    switch (action.type){
        case types.ADD_TASK:
            return[
                ... state,
                {
                    taskName: action.taskName,
                    isCompleted: false,
                },
            ];
        default:
            return state;
    }
};

