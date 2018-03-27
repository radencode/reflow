const defaultState = {
	filesCount: 0,
	files: [],
	tags: [
		{
			id: 1,
			name: 'Auto Increment',
			isVisible: true,
		},
		{
			id: 2,
			name: 'Regix',
			isVisible: true,
		},
		{
			id: 3,
			name: 'File Name',
			isVisible: true,
		},
		{
			id: 4,
			name: 'Type',
			isVisible: true,
		},
		{
			id: 5,
			name: 'Replace',
			isVisible: true,
		},
		{
			id: 6,
			name: 'Random',
			isVisible: true,
		},
		{
			id: 7,
			name: 'Reverse',
			isVisible: true,
		},
	],
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
