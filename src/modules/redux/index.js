import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {searchReducer} from '../../screens/entertain/movieApp/redux/search';
import {favoriteReducer} from '../../screens/entertain/movieApp/redux/favorite';
import {splashReducer} from './splash';
import {netReducer} from './netInfo';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['searchReducer', 'splashReducer', 'netReducer'],
};
const rootReducer = combineReducers({
  searchReducer,
  favoriteReducer,
  splashReducer,
  netReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);
  return {store, persistor};
};
