import Label from 'assets/text';

const defaultState = {
  label: '',
  hover: false, 
}

export default function reducer(state=defaultState, action){
  switch(action.type){
    case 'HOVER_IN_TITLE':
      state = {...state, label: action.modal, hover: true};
      break;
    case 'HOVER_OUT_TITLE':
      state = {...state, hover: false};
      break;
    default:
      return state;
  } 
  return state;
}
