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
  
  
export const loadingTriggerActionCreator = (parametr) => {
    return {
      type: 'TRIGGER_CHANGE',
      payload: parametr,
    };
  };