const initialState = {
  netConnection: false,
};

export const netReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_NET_EXIST':
      return {
        ...state,
        netConnection: action.payload,
      };
    default:
      return state;
  }
};
