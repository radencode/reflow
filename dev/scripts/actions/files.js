export function add_file(_file){
	return{
		type: 'ADD_FILE',
		file: _file
	};
}

export function remove_file(_key){
	return{
		type: 'REMOVE_FILE',
		key: _key
	}
}

export function sort_files(sort_by){
	switch(sort_by){
		case 'type':
			return{
				type: 'SORT_BY_TYPE'
			};			
		break;
		default:
			return{
				type: 'SORT_ORIGINAL'
			};
	};
}