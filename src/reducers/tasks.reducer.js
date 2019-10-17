import {TASK_TYPE} from '../actions/tasks.action';

let initialTasksState = {
    current: 0,
    max: 10,
    tasks: []
};

export const tasksReducer = (state = initialTasksState, action) => {
        switch (action.type) {
            case TASK_TYPE.ADD_TASK:
                // console.log(action);
                if (action.payload.current > state.max) return state;
                return {
                    ...state,
                    current: action.payload.current,
                    tasks: [...state.tasks, {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false
                    }]
                };
            case TASK_TYPE.REMOVE_TASK:
                return {
                    ...state,
                    current: action.payload.current,
                    tasks: state.tasks.filter(task =>
                        task.id !== action.payload.id
                    ).map((el, idx) => {
                        el.id = ++idx;
                        return el;
                    })
                };
            case TASK_TYPE.CHANGE_STATUS:
                // console.log(action.payload.id)
                return {
                    ...state,
                    current: action.payload.current,
                    tasks: state.tasks.map(task =>
                        (task.id === action.payload.id)
                            ? {...task, completed: !task.completed}
                            : task
                    )
                };
            default:
                return state;
        }
    }
;
