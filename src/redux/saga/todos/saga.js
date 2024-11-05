import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_TODOS, FETCH_TODOS, UPDATE_TODOS } from './actions';

const API_URL = 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos';

function* fetchTodos() {
    try {
        const response = yield call(axios.get, API_URL + '?completed=false');
        yield put({ type: 'SET_TODOS', payload: response.data });
    } catch (error) {
        console.error(error);
    }
}


function* updateTodos(action) {
    try{
        console.log(action) 
        const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload.body);
        yield put({ type: FETCH_TODOS });
    } catch (error) {
        console.error(error); 
    }
}


function* addTodos(action) {
    try {
        const response = yield call(axios.post, API_URL, action.payload.body);
        yield put({ type: "ADD_TODO", payload: response.data });
    } catch (error) {
        console.error(error);
    }
}

export default function* todoSagas() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
    yield takeLatest(UPDATE_TODOS, updateTodos);
    yield takeLatest(ADD_TODOS, addTodos);
}