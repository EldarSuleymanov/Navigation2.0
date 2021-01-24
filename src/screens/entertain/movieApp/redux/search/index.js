const initialState = {
    title: 'Eldar_poisk.com',
    searchText: '',
    errorMessage: '',
    url: 'http://api.tvmaze.com/search/shows?q=',
    data: [],
    loadingTrigger: false,
  };
  
  export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INPUT_DONE':
        return {
          ...state,
          searchText: action.payload,
        };
      case 'ERROR_MESSAGE':
        return {
          ...state,
          errorMessage: action.payload,
        };
      case 'DATA_IN':
        return {
          ...state,
          data: action.payload,
        };
      case 'TRIGGER_CHANGE':
        return {
          ...state,
          loadingTrigger: action.payload,
        };
      default:
        return state;
    }
  };
  