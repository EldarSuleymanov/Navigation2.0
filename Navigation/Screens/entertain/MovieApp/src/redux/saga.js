import {takeEvery, put, call, fork, select} from 'redux-saga/effects';
import {
  DataActionCreator,
  errorActionCreator,
  loadingTriggerActionCreator,
} from './actions';

const asyncFunc = (url, search) => {
  return fetch(url + search)
    .then((data) => data.json())
    .then((array) => array)
    .catch((e) => {
      console.log('Something went wrong, try again later');
    });
};

// const asyncFunc = async (url, search) => {
//   // return await fetch(url + search)
//     const response = await fetch(url + search);
//     const array = await response.json();
//     return array
// };

function* worker({payload}) {
  try { 
    yield put(loadingTriggerActionCreator(true));
    const sel = yield select((state) => state.netReducer.netConnection);
    if (sel) {
      const urlFromReducer = yield select((state) => state.searchReducer.url);
      const array = yield call(asyncFunc, urlFromReducer, payload);
      if (array.length) {
        yield put(DataActionCreator(array));
        yield put(errorActionCreator(''));
      } else {
        yield put(errorActionCreator('there is no such movie'));
      }
      yield put(loadingTriggerActionCreator(false));
    } else {
      alert('Internet not reachable');
      yield put(loadingTriggerActionCreator(false));
    }
  } catch (e) {
    yield put(errorActionCreator('Something went wrong, try again later'));
    yield put(loadingTriggerActionCreator(false));
  }

  // const array = yield call(asyncFuncSaga,url, search);
  // if (array.length) {
  //   yield put(DataActionCreator(array));
  //   // dispatch(DataActionCreator(array));
  //   yield put(errorActionCreator(''));
  // } else {
  //   yield put(errorActionCreator('there is no such movie'));
  // }
}

export function* watcher() {
  yield takeEvery('WATCHER_WATCHING', worker);
}

export default function* rootSaga() {
  yield fork(watcher);
}
