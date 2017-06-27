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
		case 'SORT_FILES':
			return state.slice().sort((_fileA, _fileB) => {
				const fileA = get_sort_type(_fileA);
				const fileB = get_sort_type(_fileB);
				if(fileA > fileB) return action.up;
				if(fileA < fileB) return action.down;
				return 0;
			});
		default:
			return state;
	}
	function get_sort_type(_file){
		switch(action.sort){
			case 'type': return _file.type.toLowerCase();
			case 'original': return _file.original.toLowerCase();
			case 'new': return _file.new.toLowerCase();
			case 'size': return _file.size.toLowerCase();			
			default:
				return _file.original.toLowerCase();
		}
	}
}