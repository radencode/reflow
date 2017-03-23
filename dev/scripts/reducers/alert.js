const defaultState = {
	stage: 'modal',
	alert: false,
	message: '',
	success: '',
	cancel: '',
	link: '',
}

export default function reducer(state=defaultState, action){
	switch(action.type){
		case 'CREATE_ALERT':
			state = {...state, alert: true, message: action.message, success: action.success, cancel: action.cancel};
			break;
		case 'FIRE_ALERT':
			state = {...state, stage: 'modal active', link: action.link};
			break;
		case 'CLOSE_ALERT':
			state = {...state, stage: 'modal'};
			break;
		case 'DESTROY_ALERT':
			state = {...state, ...defaultState};
			break;
		default:
			return state;
	}
	return state;
}
