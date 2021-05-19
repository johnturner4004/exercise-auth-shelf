import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


// Gets the item from the database
function* fetchAddItem (action) {
    try {
        const response = yield axios.get(`/api/shelf/${action.payload.id}`);
        yield put({type: 'SET_ADD_ITEM', payload: response.data});
    } catch (error) {
        console.log('Failed In fetch item ', error);
    }
}

// Adds new item entry

function* AddNewItem(action) {
    try {
        const response = yield axios.post(`/api/shelf/`, action.payload);
        yield put ({type: 'FETCH_ADDING_ITEM'});
    } catch (error) {
        console.log('Failed to get new item', error);
    }
}

function* addItemSaga() {
    yield takeEvery('FETCH_ADD_ITEM', fetchAddItem);
    yield takeEvery('ADDING_NEW_ITEM', AddNewItem);
}

export default addItemSaga;