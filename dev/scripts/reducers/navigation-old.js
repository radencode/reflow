const defaultState = {
	hover: false
}

export default function reducer(state=defaultState, action){
	switch(action.type){
		case 'NAVIGATION_HOVER_ACTIVE':
			state = {...state, hover: true};
			break;
		case 'NAVIGATION_HOVER_INACTIVE':
			state = {...state, hover: false};
			break;
		default:
			return state;
	}
	return state;
}   