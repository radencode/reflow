const defaultState = {
	files: 0,
	configure: false
}

export default function reducer(state=defaultState, action){
	switch(action.type){
		case 'SET_SELECTED_FILES':
			state = {...state, files: action.payload};
			break;
		case 'SET_CONFIGURE':
			state = {...state, configure: action.payload};
			break;
		case 'RESET_PATH_VARIABLES':
			state = {...state, ...defaultState};
			break;
		default:
			return state;
	}
	return state;
}