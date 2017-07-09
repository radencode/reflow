export function requestAttributes(){
	return{
		type: 'REQUEST_ATTRIBUTES',
	};
}

export function receiveAttributes(attributes){
	return{
		type: 'RECEIVE_ATTRIBUTES',
		payload: {
			attributes: attributes
		}
	};
}