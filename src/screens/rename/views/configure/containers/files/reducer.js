const defaultState = {
	data: [],
	count: 0,
	loader: {
		isLoading: false,
		message: 'Loading files...',
	},
	path: '',
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'FILES_DATA_LOAD':
		return { ...state, data: action.payload };

	case 'FILES_DATA_SORT':
		switch (action.payload.type) {
		case 'boolean':
			return {
				...state,
				data: state.data.sort((fileA, fileB) => {
					const compareA = fileA[action.payload.field];
					const compareB = fileB[action.payload.field];
					if (compareA && !compareB) return action.payload.direction == 'down' ? -1 : 1;
					if (!compareA && compareB) return action.payload.direction == 'down' ? 1 : -1;
					return 0;
				}),
			};
		case 'string':
			return {
				...state,
				data: state.data.sort((fileA, fileB) => {
					const compareA = fileA[action.payload.field].toLowerCase();
					const compareB = fileB[action.payload.field].toLowerCase();
					if (compareA > compareB) return action.payload.direction == 'down' ? 1 : -1;
					if (compareA < compareB) return action.payload.direction == 'down' ? -1 : 1;
					return 0;
				}),
			};
		default:
			return state;
		}

	case 'FILES_SET_PATH':
		return { ...state, path: action.payload };

	case 'FILE_DATA_DELETE':
		return {
			...state,
			data: state.data.filter(file => file.id !== action.payload),
			count: state.count > 0 ? state.count - 1 : 0,
		};

	case 'FILE_IS_SELECTED_TOGGLE':
		return {
			...state,
			data: state.data.map(file => (file.id === action.payload ? { ...file, isSelected: !file.isSelected } : file)),
		};

	case 'FILES_COUNT_UPDATE':
		return { ...state, count: action.payload };

	case 'FILES_LOADER_UPDATE':
		return { ...state, loader: { isLoading: action.payload.isLoading, message: action.payload.message } };

	case 'FILES_CLEAR_DATA':
		return defaultState;

	default:
		return state;
	}
};
