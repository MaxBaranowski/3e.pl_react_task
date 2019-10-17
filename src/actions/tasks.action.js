export const TASK_TYPE = {
    ADD_TASK: "ADD_TASK",
    REMOVE_TASK: "REMOVE_TASK",
    CHANGE_STATUS: "CHANGE_STATUS"
};

const _task = {
    current: 0
};

export const addTask = taskText => ({
    type: TASK_TYPE.ADD_TASK,
    payload: {
        current: ++_task.current,
        text: taskText,
        id: _task.current
    }
});

export const removeTask = taskID => ({
    type: TASK_TYPE.REMOVE_TASK,
    payload: {
        current: --_task.current,
        id: taskID
    }
});

export const changeTaskStatus = taskID => ({
    type: TASK_TYPE.CHANGE_STATUS,
    payload: {
        current: _task.current,
        id: taskID
    }
});


