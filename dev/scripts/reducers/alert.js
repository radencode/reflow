const defaultState = {
	stage: 'modal',
	alert: false,
	message: '',
	success: '',
	cancel: '',
	link: ''
}

export default function reducer(state = defaultState, action){
	switch(action.type){
		case 'CREATE_ALERT':
			return {...state, alert: true, message: action.payload.message, success: action.payload.success, cancel: action.payload.cancel};
		case 'FIRE_ALERT':
			return {...state, stage: 'modal active', link: action.payload.link};
		case 'CLOSE_ALERT':
			return {...state, stage: 'modal'};
		case 'DESTROY_ALERT':
			return {...state, ...defaultState};
		default:
			return state;
	}
}
