export const TASK_TYPE = {
    ADD_TASK: "ADD_TASK",
    REMOVE_TASK: "REMOVE_TASK",
    CHANGE_STATUS: "CHANGE_STATUS"
};

const _task = {
    current: 0
};

export const addTask = task => ({
    type: TASK_TYPE.ADD_TASK,
    payload: {
        current: _task.current++
    }
});

export const removeTask = task => ({
    type: TASK_TYPE.REMOVE_TASK,
    payload: {
        current: _task.current--
    }
});

export const changeTaskStatus = taskID => ({
    type: TASK_TYPE.ADD_TASK,
    taskID
});


