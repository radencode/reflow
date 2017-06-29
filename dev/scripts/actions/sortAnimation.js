
export function activateAnimationSort(id){
	return {
		type: 'ACTIVATE_SORT',
		payload: { 
			id: id
		}
	};
}

export function sortAnimationUp(id){
	return {
		type: 'SORT_UP',
		payload: {
			id: id
		}
	};
}

export function sortAnimationDown(id){
	return {
		type: 'SORT_DOWN',
		payload: {
			id: id
		}
	};
}
