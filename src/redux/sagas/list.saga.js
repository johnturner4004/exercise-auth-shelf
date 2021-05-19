import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* fetchList() {
    const response = yield axios.get('/api/shelf');
    yield put ({type: 'GET_LIST'});
}

function* fetchSaga() {
    yield takeLatest('GET_ITEMS', fetchList);
}

export default fetchSaga;