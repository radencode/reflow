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
		case 'CLEAR_FILES':
			return [];
		case 'SORT_FILES':
			return state.slice().sort((fileA, fileB) => {
				const compareA = fileA[action.sort].toLowerCase();
				const compareB = fileB[action.sort].toLowerCase();
				if(compareA > compareB) return action.order == 'down' ? 1 : -1;
				if(compareA < compareB) return action.order == 'down' ? -1 : 1;
				return 0;
			});
		case 'SEARCH_FILES':
			return state.map(file => {
				if(file.type.toLowerCase().indexOf(action.KeyWord) === -1 
					&& file.original.toLowerCase().indexOf(action.KeyWord) === -1 
					&& file.new.toLowerCase().indexOf(action.KeyWord) === -1
					&& file.size.toLowerCase().indexOf(action.KeyWord) === -1) return {...file, visibility: false};
				return {...file, visibility: true};
			});
		default:
			return state;
	}
}