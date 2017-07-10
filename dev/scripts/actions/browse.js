export function setSelectedFiles(count){
	return {
		type: 'SET_SELECTED_FILES',
		payload: {
			count: count
		}
	};
}

export function configureType(type){
	return {
		type: 'CONFIGURE_TYPE',
		payload: {
			type: type
		}
	};
}

export function configuretext(text){
	return {
		type: 'CONFIGURE_TEXT',
		payload: {
			text: text
		} 
	};
}

export function resetPathVariables(){
	return {
		type: 'RESET_PATH_VARIABLES'
	};
}

