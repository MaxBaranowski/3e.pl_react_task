import {TASK_TYPE} from '../actions/tasks.action';

let initialTasksState = {
    current: 0,
    max: 10
};

export const tasksReducer = (state = initialTasksState, action) => {
    switch (action.type) {
        case TASK_TYPE.ADD_TASK:
            return {
                ...state,
                current: action.payload.current
            };
        case TASK_TYPE.REMOVE_TASK:
            return {
                ...state,
                current: action.payload.current
            };
        case TASK_TYPE.CHANGE_STATUS:
            return action;
        default:
            return state;
    }
};
