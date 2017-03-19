const defaultState = {
  label: 'Rename'
}

export default function reducer(state=defaultState, action){
  if(action.type === 'SWITCH_TITLE')
    state = {...state, label: action.payload};
  return state;
}
