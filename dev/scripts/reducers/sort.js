const defaultState = {
	sorts: [
		{active: false, status: 'up', id: 0},
		{active: true, status: 'up', id: 1},
		{active: false, status: 'up', id: 2},
		{active: false, status: 'up', id: 3},
	],
}

export default function reducer(state = defaultState, action){
	switch(action.type){
		case 'ACTIVATE_SORT':
			state = {
				...state, sorts: state.sorts.map(sort => 
				(sort.id === action.id) ? {...sort, active: true} : {...sort, active: false, status: 'up'})
			};
		break;
		case 'SORT_UP':
			state = {
				...state, sorts: state.sorts.map(sort => 
				(sort.id === action.id) ? {...sort, status: 'up'} : sort)
			};
		break;
		case 'SORT_DOWN':
			state = {
				...state, sorts: state.sorts.map(sort => 
				(sort.id === action.id) ? {...sort, status: 'down'} : sort)
			};
		break;
		default:
			return state;
	}
	return state;
}