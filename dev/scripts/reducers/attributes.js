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
		case 'SEARCH_ATTRIBUTES':
			return {...state, attributes: state.attributes.map(attribute => {
			  return attribute.Name.toLowerCase().indexOf(action.payload.keyWord) === -1 ? {...attribute, Visible: false} : {...attribute, Visible: true};
			})};
		default:
			return state;
	}
}