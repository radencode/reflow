const defaultState = {
	list: [],
	count: 0,
	loader: {
		isLoading: false,
		message: 'Loading files...',
	},
	unsaved: false,
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'FILES_LIST_UPDATE':
		return { ...state, list: action.payload };

	case 'FILES_LIST_SORT':
		switch (action.payload.type) {
		case 'boolean':
			return {
				...state,
				list: state.list.sort((fileA, fileB) => {
					let compareA = fileA[action.payload.field];
					let compareB = fileB[action.payload.field];
					if (compareA && !compareB) return action.payload.direction == 'down' ? -1 : 1;
					if (!compareA && compareB) return action.payload.direction == 'down' ? 1 : -1;
					return 0;
				}),
			};
		case 'string':
			return {
				...state,
				list: state.list.sort((fileA, fileB) => {
					let compareA = fileA[action.payload.field].toLowerCase();
					let compareB = fileB[action.payload.field].toLowerCase();
					if (compareA > compareB) return action.payload.direction == 'down' ? 1 : -1;
					if (compareA < compareB) return action.payload.direction == 'down' ? -1 : 1;
					return 0;
				}),
			};
		default:
			return state;
		}

	case 'FILE_DELETE':
		return {
			...state,
			list: state.list.filter(file => file.Key !== action.payload),
			count: state.count > 0 ? state.count - 1 : 0,
		};

	case 'FILE_IS_SELECTED_TOGGLE':
		return {
			...state,
			list: state.list.map(file => (file.Key === action.payload ? { ...file, isSelected: !file.isSelected } : file)),
		};

	case 'FILES_COUNT_SET':
		return { ...state, count: action.payload };

	case 'FILES_LOADER_UPDATE':
		return { ...state, loader: { isLoading: action.payload.isLoading, message: action.payload.message } };

	case 'FILES_SET_UNSAVED':
		return {
			...state,
			unsaved: true,
		};

	case 'FILES_CLEAR_UNSAVED':
		return {
			...state,
			unsaved: false,
		};

	case 'DEFAULT_STATE':
		return defaultState;

	default:
		return state;
	}
};
