import Label from 'assets/text';

const defaultState = {
  label: Label.Pages[0].Title
}

export default function reducer(state=defaultState, action){
  if(action.type === 'SWITCH_TITLE')
    state = {...state, label: action.payload};
  return state;
}
