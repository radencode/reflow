export default function reducer(state = [], action){
	switch(action.type){
		case 'ADD_FILE':
			return [...state, {
				key: action.payload.file.Key,
				type: action.payload.file.Type,
				original: action.payload.file.OriginalName,
				new: action.payload.file.NewName,
				size: action.payload.file.Size,
				visibility: true,
				selected: true				
			}];
		case 'REMOVE_FILE':
			return state.filter(file => file.key !== action.payload.key);
		case 'CLEAR_FILES':
			return [];
		case 'SORT_FILES':
			return state.slice().sort((fileA, fileB) => {
				const compareA = fileA[action.payload.sort].toLowerCase();
				const compareB = fileB[action.payload.sort].toLowerCase();
				if(compareA > compareB) return action.payload.order == 'down' ? 1 : -1;
				if(compareA < compareB) return action.payload.order == 'down' ? -1 : 1;
				return 0;
			});
		case 'SEARCH_FILES':
			return state.map(file => {
				if(file.type.toLowerCase().indexOf(action.payload.keyWord) === -1 
					&& file.original.toLowerCase().indexOf(action.payload.keyWord) === -1 
					&& file.new.toLowerCase().indexOf(action.payload.keyWord) === -1
					&& file.size.toLowerCase().indexOf(action.payload.keyWord) === -1) return {...file, visibility: false};
				return {...file, visibility: true};
			});
		default:
			return state;
	}
}