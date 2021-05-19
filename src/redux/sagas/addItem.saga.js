import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


// Gets the item from the database


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
    yield takeEvery('ADDING_NEW_ITEM', AddNewItem);
}

export default addItemSaga;
