const defaultState = {
	active: 'rename'
}

export default function reducer(state = defaultState, action){
	switch(action.type){
		case 'SET_ACTIVE_MODAL':
			return {...state, active: action.payload.modal};
		default:
			return state;
	}
}   