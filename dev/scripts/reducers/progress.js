const defaultState = {
	browse: {status: 'active', bar: 'hide', connector: 'display'},
	configure: {status: 'await', bar: 'hide', connector: 'display'},
	options: {status: 'await', bar: 'hide', connector: 'display'},
	finalize: {status: 'await', bar: 'none', connector: 'none'},
	finish: false,
	animation: 'slide-left',
}

export default function reducer(state=defaultState, action){
	switch(action.type){
		case 'ACTIVATE_BROWSE_MODAL':
			state = {...state, browse: {...state, status: 'active', bar: 'hide', connector: 'display'}, 
												 configure: {...state, status: 'await', bar: 'hide', connector: 'display'}, 
												 options: {...state, status: 'await', bar: 'hide', connector: 'display'}, 
												 finalize: {...state, status: 'await', bar: 'none', connector: 'none'}, finish: false};
			break;
		case 'ACTIVATE_CONFIGURE_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 configure: {...state, status: 'active', bar: 'hide', connector: 'display'}, 
												 options: {...state, status: 'await', bar: 'hide', connector: 'display'}, 
												 finalize: {...state, status: 'await', bar: 'none', connector: 'none'}, finish: false};
			break;
		case 'ACTIVATE_OPTIONS_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 configure: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 options: {...state, status: 'active', bar: 'hide', connector: 'display'}, 
												 finalize: {...state, status: 'await', bar: 'none', connector: 'none'}, finish: false};
			break;
		case 'ACTIVATE_FINALIZE_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 configure: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 options: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 finalize: {...state, status: 'active', bar: 'none', connector: 'none'}, finish: false};
			break;
		case 'ACTIVATE_FINISH_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 configure: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 options: {...state, status: 'completed', bar: 'show', connector: 'display'}, 
												 finalize: {...state, status: 'completed', bar: 'none', connector: 'none'}, finish: true};
			break;
		case 'UPDATE_ANIMATION_TYPE':
			state = {...state, animation: action.payload};
		break;
		default:
			return state;
	}
	return state;
}