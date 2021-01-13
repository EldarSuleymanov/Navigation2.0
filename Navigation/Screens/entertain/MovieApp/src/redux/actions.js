export const inputActionCreator = (text) => {
  return {
    type: 'INPUT_DONE',
    payload: text,
  };
};

export const errorActionCreator = (message) => {
  return {
    type: 'ERROR_MESSAGE',
    payload: message,
  };
};



export const DataActionCreator = (array) => {
  return {
    type: 'DATA_IN',
    payload: array,
  };
};

export const FavoriteAdd = (movie) => {
  return {
    type: 'FAVORITE_ADD',
    payload: movie,
  };
};

export const FavoriteDeleted = (movie) => {
  return {
    type: 'FAVORITE_DELETE',
    payload: movie,
  };
};

export const WatcherWatching = (parametr) => {
  return {
    type: 'WATCHER_WATCHING',
    payload: parametr,
  };
};