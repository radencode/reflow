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

export function clear_files(){
	return{
		type: 'CLEAR_FILES',
	}
}

export function sort_files(_sort, _order = 'down'){
	return{
		type: 'SORT_FILES',
		sort: _sort,
		order: _order
	}
}