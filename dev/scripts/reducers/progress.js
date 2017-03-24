const defaultState = {
	browse: {status: 'active', bar: 'hide'},
	configure: {status: 'await', bar: 'hide'},
	options: {status: 'await', bar: 'hide'},
	finalize: {status: 'await', bar: 'hide'},
	finish: false
}

export default function reducer(state=defaultState, action){
	switch(action.type){
		case 'ACTIVATE_BROWSE_MODAL':
			state = {...state, browse: {...state, status: 'active', bar: 'hide'}, 
												 configure: {...state, status: 'await', bar: 'hide'}, 
												 options: {...state, status: 'await', bar: 'hide'}, 
												 finalize: {...state, status: 'await'}, finish: false};
			break;
		case 'ACTIVATE_CONFIGURE_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show'}, 
												 configure: {...state, status: 'active', bar: 'hide'}, 
												 options: {...state, status: 'await', bar: 'hide'}, 
												 finalize: {...state, status: 'await'}, finish: false};
			break;
		case 'ACTIVATE_OPTIONS_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show'}, 
												 configure: {...state, status: 'completed', bar: 'show'}, 
												 options: {...state, status: 'active', bar: 'hide'}, 
												 finalize: {...state, status: 'await'}, finish: false};
			break;
		case 'ACTIVATE_FINALIZE_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show'}, 
												 configure: {...state, status: 'completed', bar: 'show'}, 
												 options: {...state, status: 'completed', bar: 'show'}, 
												 finalize: {...state, status: 'active'}, finish: false};
			break;
		case 'ACTIVATE_FINISH_MODAL':
			state = {...state, browse: {...state, status: 'completed', bar: 'show'}, 
												 configure: {...state, status: 'completed', bar: 'show'}, 
												 options: {...state, status: 'completed', bar: 'show'}, 
												 finalize: {...state, status: 'completed'}, finish: true};
			break;
		default:
			return state;
	}
	return state;
}