export function setSelectedFiles(count){
	return {
		type: 'SET_SELECTED_FILES',
		payload: count
	};
}

export function setSelectedFiles(configure){
	return {
		type: 'SET_CONFIGURE',
		payload: configure
	};
}

export function setSelectedFiles(){
	return {
		type: 'RESET_PATH_VARIABLES',
	};
}