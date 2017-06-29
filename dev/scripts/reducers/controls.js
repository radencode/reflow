const defaultState = {
  window: 'initial'
};

export default function reducer(state = defaultState, action){
  switch(action.type){
    case 'MAX_WINDOW_STATE':
      return {...state, window: 'max'};
    case 'RESTORE_WINDOW_STATE':
      return {...state, window: 'initial'};
      break;
    default:
      return state;   
  }
}
