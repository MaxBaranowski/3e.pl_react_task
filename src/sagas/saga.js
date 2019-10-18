import axios from 'axios';
import {all, put, takeLatest} from '@redux-saga/core/effects';
import {call} from 'redux-saga/effects'
import {getTasks} from "../actions/tasks.action";

export function* chageStatusSaga() {
    yield takeLatest("CHANGE_STATUS", function () {
        console.log("status changed")
    });
}

export function* fetchTasksSaga() {
    yield takeLatest("GET_TASKS", fetchTasksSagaAsync);
}

//
function* fetchTasksSagaAsync(dispatch){
    function fetchTasks() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5`);
    }
    const products = yield call(fetchTasks);
    // console.log(products)
    yield put( getTasks(products.data));
}






export function* rootSaga() {
    yield all([
        chageStatusSaga(),
        fetchTasksSagaAsync(),
    ]);
}
