import * as types from '../actions/ActionTypes';

export default function todos(state = initialTasks, actions) {
    switch (action.type){
        default:
            return state;
    }
}


const initialTasks = [
    { taskName: 'task1',isCompleted: false },
    { taskName: 'task2',isCompleted: true },
    { taskName: 'task3',isCompleted: false },
];

