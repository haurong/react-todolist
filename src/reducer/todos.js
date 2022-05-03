
import * as types from '../actions/ActionTypes';


const initialTasks = [
    { taskName: 'task1',isCompleted: false ,id: "todo-1" },
    { taskName: 'task2',isCompleted: true , id: "todo-2" },
    { taskName: 'task3',isCompleted: false , id: "todo-3" },
];

export default function todos(state = initialTasks, action) {
    switch (action.type){
        case types.ADD_TASK:
            return[
                ...state,
                {
                    taskName: action.taskName,
                    isCompleted: false,
                },
            ];
        case types.DELETE_TASK:
            return[
                ...state.slice(0,action.idx),
                ...state.slice(action.idx + 1)
            ];
        // case types.EDIT_TASK:
        //     function editTask(id, newName) {
        //         const editedTaskList = state.map(task => {
        //           if (id === state.id) {
        //             return {...state, name: newName}
        //           }
        //           return state;
        //         });
        //         setTasks(editedTaskList);
        //       }
        //       break;
        
        case types.TOGGLE_TASK:
            let newState = [...state];
            newState[action.idx].isCompleted = !newState[action.idx].isCompleted;
            return newState;
        default:
            return state;
    }
};

