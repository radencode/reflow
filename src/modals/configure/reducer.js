const defaultState = {
	filesCount: 0,
	files: [],
	tags: [],
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
	case 'ADD_FILES':
		return {
			...state,
			files: action.payload.files.map(file => {
				return { ...file, isVisible: true, isChecked: true };
			}),
		};
	case 'ADD_TAGS':
		return {
			...state,
			tags: action.payload.tags.map(tag => {
				return { ...tag, isVisible: true };
			}),
		};
	case 'DELETE_FILE':
		return { ...state, files: state.files.filter(file => file.Key !== action.payload.key) };
	case 'DELETE_FILES':
		return defaultState;
	case 'SET_COUNT':
		return { ...state, filesCount: action.payload.count };
	case 'SORT_FILES':
		switch (action.payload.type) {
		case 'boolean':
			return {
				...state,
				files: state.files.sort((fileA, fileB) => {
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
				files: state.files.sort((fileA, fileB) => {
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
	case 'SEARCH_FILES':
		return {
			...state,
			files: state.files.map(file => {
				return file.OriginalName.toLowerCase().indexOf(action.payload.keyword) === -1
					? { ...file, isVisible: false }
					: { ...file, isVisible: true };
			}),
		};
	case 'TOGGLE_FILE_CHECKED':
		return {
			...state,
			files: state.files.map(file => {
				return file.Key === action.payload.key ? { ...file, isChecked: !file.isChecked } : file;
			}),
		};
	case 'TOGGLE_SETTINGS':
		return {
			...state,
			files: state.files.map(file => {
				return file.Key === action.payload.key ? { ...file, Settings: !file.Settings } : file;
			}),
		};
	default:
		return state;
	}
}
