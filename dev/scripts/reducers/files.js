export default function reducer(state = [], action){
	switch(action.type){
		case 'ADD_FILE':
			return [...state, {
				key: action.file.Key,
				type: action.file.Type,
				original: action.file.OriginalName,
				new: action.file.NewName,
				size: action.file.Size,
				visibility: true,
				selected: true				
			}];
		case 'REMOVE_FILE':
			return state.filter(file => file.key !== action.key);
		break;
		case 'CLEAR_FILES':
			return [];
		default:
			return state;
	}
}