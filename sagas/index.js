import { all } from 'redux-saga/effects';
import videoSaga from './video-saga';

function* rootSaga() {
  yield all([
    videoSaga()
  ]);
}

export default rootSaga;
