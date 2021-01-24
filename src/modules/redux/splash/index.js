const initialState = {
    trigger: true,
  };
  
  export const splashReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SPLASH':
        return {
          ...state,
          trigger: action.payload,
        };
      default:
        return state;
    }
  };