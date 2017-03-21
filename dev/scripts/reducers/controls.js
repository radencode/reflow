const defaultState = {
  window: 'initial'
};

export default function reducer(state=defaultState, action){
  switch(action.type){
    case 'MAX_WINDOW_STATE':
      state = {...state, window: 'max'};
      break;
    case 'RESTORE_WINDOW_STATE':
      state = {...state, window: 'initial'};
      break;
  }
  return state;
}
