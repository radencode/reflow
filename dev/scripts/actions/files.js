export function addFile(file){
	return{
		type: 'ADD_FILE',
		payload: {
			file: file
		}
	};
}

export function removeFile(key){
	return{
		type: 'REMOVE_FILE',
		payload: {
			key: key
		}
	};
}

export function clearFiles(){
	return{
		type: 'CLEAR_FILES'
	};
}

export function sortFiles(sort, order = 'down'){
	return{
		type: 'SORT_FILES',
		payload: {
			sort: sort,
			order: order
		}
	};
}

export function searchFiles(keyWord){
	return{
		type: 'SEARCH_FILES',
		payload: {
			keyWord: keyWord.toLowerCase()
		}
	};
}