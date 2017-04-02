export function setSelectedFiles(count){
	return {
		type: 'SET_SELECTED_FILES',
		payload: count
	};
}

export function configureType(type){
	return {
		type: 'CONFIGURE_TYPE',
		payload: type
	};
}

export function configureLabel(label){
	return {
		type: 'CONFIGURE_LABEL',
		payload: label
	};
}

export function resetPathVariables(){
	return {
		type: 'RESET_PATH_VARIABLES',
	};
}

