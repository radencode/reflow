export function requestFiles(){
	return{
		type: 'REQUEST_FILES',
	};
}

export function receiveFiles(files){
	return{
		type: 'RECEIVE_FILES',
		payload: {
			files: files
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

export function sortFiles(type, sort, order = 'down'){
	return{
		type: 'SORT_FILES',
		payload: {
			sort: sort,
			type: type,
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

export function toggleSelect(key){
	return {
		type: 'TOGGLE_SELECT',
		payload: {
			key: key
		}
	};
}

export function toggleSettings(key){
	return {
		type: 'TOGGLE_SETTINGS',
		payload: {
			key: key
		}
	};
}