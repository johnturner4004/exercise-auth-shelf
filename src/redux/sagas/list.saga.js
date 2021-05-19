import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* fetchList() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put ({type: 'GET_LIST', payload: response});
    }
    catch (error) {
        alert(`Sorry. Things aren't working at the moment. Try again later`);
        console.log('Error getting list', error);
    }
}

function* fetchSaga() {
    yield takeLatest('GET_ITEMS', fetchList);
}

export default fetchSaga;