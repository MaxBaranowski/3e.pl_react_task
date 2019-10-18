export const TASK_TYPE = {
    ADD_TASK: "ADD_TASK",
    REMOVE_TASK: "REMOVE_TASK",
    CHANGE_STATUS: "CHANGE_STATUS",
    FETCH_FAKE_DATA: "FETCH_FAKE_DATA"
};

const _task = {
    current: 0
};

export const addTask = taskText => ({
    type: TASK_TYPE.ADD_TASK,
    payload: {
        current: ++_task.current,
        title: taskText,
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

export const getTasks = req => ({
    type: TASK_TYPE.FETCH_FAKE_DATA,
    payload: {
        data: req,
        current: _task.current = req.length
    }
});



