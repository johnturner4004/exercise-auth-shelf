import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* deleteItem(action) {
  try {
    let id = action.payload;
    yield axios.delete(`/api/shelf/${id}`);
    yield put({type: 'GET_ITEMS'});
  } catch (error) {
    console.log('Error deleting item', error);
    
  } 
  
}

function* deleteItemSaga() {
  yield takeLatest('DELETE_ITEM', deleteItem)
}

export default deleteItemSaga;