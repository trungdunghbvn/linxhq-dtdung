import { takeEvery, call, put } from 'redux-saga/effects';
import {
    GET_LIST,
    GET_LIST_RESPONSE,
    GET_TOKEN,
    GET_USER
} from '../constants/index';

import { Service } from './service';

function* changeSearchVideo(action) {
    try {
        let data = yield call(Service.changeSearchVideo, action);
        yield put({ type: GET_LIST_RESPONSE, data });
    } catch (error) {
        yield put({ type: GET_LIST_RESPONSE, error });
    }
}
function* getUser(action) {
    console.log(action)
    try {
        let data = yield call(Service.getToken, action);
        yield put({ type: GET_USER, data });
    } catch (error) {
        yield put({ type: GET_USER, error });
    }
}
function* videoSaga() {
    yield takeEvery(GET_LIST, changeSearchVideo);
    yield takeEvery(GET_TOKEN, getUser);
}

export default videoSaga;
