const defaultState = {
	fetching: false,
	attributes: []
}

export default function reducer(state = defaultState, action){
	switch(action.type){
		case 'REQUEST_ATTRIBUTES':
			return {...state, fetching: true};
		case 'RECEIVE_ATTRIBUTES':
			return {...state, fetching: false, attributes: action.payload.attributes};
		default:
			return state;
	}
}