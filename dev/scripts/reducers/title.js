import getText from 'assets/text';

const defaultState = {
  text: '',
  hover: false, 
}

export default function reducer(state = defaultState, action){
  switch(action.type){
    case 'HOVER_IN_TITLE':
      return {...state, text: action.payload.modal, hover: true};
    case 'HOVER_OUT_TITLE':
      return {...state, hover: false};
    default:
      return state;
  } 
}
