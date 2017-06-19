const defaultState = {
	active: 'rename'
}

export default function reducer(state=defaultState, action){
	switch(action.type){
		case 'SET_ACTIVE_MODAL':
			state = {...state, active: action.modal};
			break;
		default:
			return state;
	}
	return state;
}   