import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// Adds new item entry

function* AddNewItem(action) {
    try {
        const response = yield axios.post(`/api/shelf/`, action.payload);
        yield put ({type: 'GET_ITEMS'});
    } catch (error) {
        console.log('Failed to get new item', error);
    }
}

function* addItemSaga() {
    yield takeEvery('ADDING_NEW_ITEM', AddNewItem);
}

export default addItemSaga;
