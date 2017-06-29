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
			return {...state, sorts: state.sorts.map(sort => 
				(sort.id === action.payload.id) ? {...sort, active: true} : {...sort, active: false, status: 'up'}
			)};
		case 'SORT_UP':
			return {...state, sorts: state.sorts.map(sort => 
				(sort.id === action.payload.id) ? {...sort, status: 'up'} : sort
			)};
		case 'SORT_DOWN':
			return {...state, sorts: state.sorts.map(sort => 
				(sort.id === action.payload.id) ? {...sort, status: 'down'} : sort
			)};
		default:
			return state;
	}
}