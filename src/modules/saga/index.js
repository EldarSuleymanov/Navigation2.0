import {fork} from 'redux-saga/effects';
import {watcher} from '../../screens/entertain/movieApp/saga';

export default function* rootSaga() {
  yield fork(watcher);
}
