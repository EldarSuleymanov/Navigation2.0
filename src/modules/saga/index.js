import { watcher } from "../../screens/entertain/movieApp/saga";

export default function* rootSaga() {
    yield fork(watcher);
  }
  