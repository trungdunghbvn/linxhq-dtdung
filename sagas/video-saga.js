import { takeEvery, call, put } from 'redux-saga/effects';
import {
    SEARCH_VIDEO,
    SEARCH_VIDEO_RESPONSE
} from '../constants/index';

import { Service } from './service';

function* changeSearchVideo(action) {
    try {
        let data = yield call(Service.changeSearchVideo, action);
        yield put({ type: SEARCH_VIDEO_RESPONSE, data });
    } catch (error) {
        yield put({ type: SEARCH_VIDEO_RESPONSE, error });
    }
}
function* videoSaga() {
    yield takeEvery(SEARCH_VIDEO, changeSearchVideo);
}

export default videoSaga;
