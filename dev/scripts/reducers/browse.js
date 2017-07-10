import * as getText from 'assets/text';

const defaultState = {
	files: 0,
	type: 'browse',
	text: getText.browse('select-prompt')
}

export default function reducer(state = defaultState, action){
	switch(action.type){
		case 'SET_SELECTED_FILES':
			return {...state, files: action.payload.count};
		case 'CONFIGURE_TYPE':
			return {...state, type: action.payload.type};
		case 'CONFIGURE_TEXT':
			return {...state, text: action.payload.text};
		case 'RESET_PATH_VARIABLES':
			return {...state, ...defaultState};
		default:
			return state;
	}
}