export default function reducer(state = [], action){
	switch(action.type){
		case 'ADD_FILE':
			state = [...state, {
				type: action.file.type,
				original: action.file.original,
				new: action.file.new,
				size: action.file.size,
				key: action.file.key
			}];
		break;
		case 'REMOVE_FILE':
			
		break;
		default:
			return state;
	}
	return state;
}