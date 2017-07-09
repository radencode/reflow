const defaultState = {
	fetching: false,
	files: []
}

export default function reducer(state = defaultState, action){
	switch(action.type){
		case 'REQUEST_FILES':
			return {...state, fetching: true};
		case 'RECEIVE_FILES':
			return {...state, fetching: false, files: action.payload.files};
		case 'REMOVE_FILE':
			return {...state, files: state.files.filter(file => file.Key !== action.payload.key)};
		case 'CLEAR_FILES':
			return defaultState;
		case 'SORT_FILES':
			switch(action.payload.type){
				case 'state': 
					return {...state, files: state.files.slice().sort((fileA, fileB) => {
						const compareA = fileA[action.payload.sort];
						const compareB = fileB[action.payload.sort];
						if(compareA && !compareB) return action.payload.order == 'down' ? -1 : 1;
						if(!compareA && compareB) return action.payload.order == 'down' ? 1 : -1;
						return 0;
					})};
				case 'word':
					return {...state, files: state.files.slice().sort((fileA, fileB) => {
						const compareA = fileA[action.payload.sort].toLowerCase();
						const compareB = fileB[action.payload.sort].toLowerCase();
						if(compareA > compareB) return action.payload.order == 'down' ? 1 : -1;
						if(compareA < compareB) return action.payload.order == 'down' ? -1 : 1;
						return 0;
					})};
				default:
					return state;
			}				
		case 'SEARCH_FILES':	
			return {...state, files: state.files.map(file => {
			  return file.OriginalName.toLowerCase().indexOf(action.payload.keyWord) === -1 ? {...file, Visible: false} : {...file, Visible: true};
			})};
		case 'TOGGLE_SELECT':
			return {...state, files: state.files.map(file => {
				return file.Key === action.payload.key ? {...file, Selected: !file.Selected} : file;
			})};
		case 'TOGGLE_SETTINGS':
			return {...state, files: state.files.map(file => {
				return file.Key === action.payload.key ? {...file, Settings: !file.Settings} : file;
			})};
		default:
			return state;
	}
}