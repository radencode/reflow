import Label from 'assets/text';

const defaultState = {
	files: 0,
	type: 'browse',
	label: Label.Pages[0].Modal[0].Messages.Select
}

export default function reducer(state=defaultState, action){
	switch(action.type){
		case 'SET_SELECTED_FILES':
			state = {...state, files: action.payload};
			break;
		case 'CONFIGURE_TYPE':
			state = {...state, type: action.payload};
			break;
		case 'CONFIGURE_LABEL':
			state = {...state, label: action.payload};
			break;
		case 'RESET_PATH_VARIABLES':
			state = {...state, ...defaultState};
			break;
		default:
			return state;
	}
	return state;
}