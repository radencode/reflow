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

export function searchAttributes(keyWord){
	return{
		type: 'SEARCH_ATTRIBUTES',
		payload: {
			keyWord: keyWord.toLowerCase()
		}
	};
}
