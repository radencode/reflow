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
				select: true				
			}];
		case 'REMOVE_FILE':
			return state.filter(file => file.key !== action.payload.key);
		case 'CLEAR_FILES':
			return [];
		case 'SORT_FILES':
			switch(action.payload.type){
				case 'state': 
					return state.slice().sort((fileA, fileB) => {
						const compareA = fileA[action.payload.sort];
						const compareB = fileB[action.payload.sort];
						if(compareA && !compareB) return action.payload.order == 'down' ? -1 : 1;
						if(!compareA && compareB) return action.payload.order == 'down' ? 1 : -1;
						return 0;
					});
				case 'word':
					return state.slice().sort((fileA, fileB) => {
						const compareA = fileA[action.payload.sort].toLowerCase();
						const compareB = fileB[action.payload.sort].toLowerCase();
						if(compareA > compareB) return action.payload.order == 'down' ? 1 : -1;
						if(compareA < compareB) return action.payload.order == 'down' ? -1 : 1;
						return 0;
					});
				default:
					return state;
			}				
		case 'SEARCH_FILES':	
			return state.map(file => {
				if(file.type.toLowerCase().indexOf(action.payload.keyWord) === -1 
					&& file.original.toLowerCase().indexOf(action.payload.keyWord) === -1 
					&& file.new.toLowerCase().indexOf(action.payload.keyWord) === -1
					&& file.size.toLowerCase().indexOf(action.payload.keyWord) === -1) return {...file, visibility: false};
				return {...file, visibility: true};
			});	
		case 'TOGGLE_SELECT':
			return state.map(file => {
				return file.key === action.payload.key ? {...file, select: !file.select} : file;
			});
		default:
			return state;
	}
}