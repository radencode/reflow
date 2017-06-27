
export function activate_sort(_id){
	return {
		type: 'ACTIVATE_SORT',
		id: _id
	};
}

export function sort_up(_id){
	return {
		type: 'SORT_UP',
		id: _id
	};
}

export function sort_down(_id){
	return {
		type: 'SORT_DOWN',
		id: _id
	};
}
