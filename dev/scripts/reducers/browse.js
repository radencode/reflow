import Label from 'assets/text';

const defaultState = {
	files: 0,
	type: 'browse',
	label: Label.Pages[0].Modal[0].Messages.Select
}

export default function reducer(state = defaultState, action){
	switch(action.type){
		case 'SET_SELECTED_FILES':
			return {...state, files: action.payload.count};
		case 'CONFIGURE_TYPE':
			return {...state, type: action.payload.type};
		case 'CONFIGURE_LABEL':
			return {...state, label: action.payload.label};
		case 'RESET_PATH_VARIABLES':
			return {...state, ...defaultState};
		default:
			return state;
	}
}