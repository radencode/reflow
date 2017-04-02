export function initialize(){
	return {
		type: 'ACTIVATE_BROWSE_MODAL'
	};
}

export function switchToConfigure(){
	return {
		type: 'ACTIVATE_CONFIGURE_MODAL'
	};
}

export function switchToOptions(){
	return {
		type: 'ACTIVATE_OPTIONS_MODAL'
	};
}

export function switchToFinalize(){
	return {
		type: 'ACTIVATE_FINALIZE_MODAL'
	};
}

export function finish(){
	return {
		type: 'ACTIVATE_FINISH_MODAL'
	};
}

export function updateAnimationType(type){
	return {
		type: 'UPDATE_ANIMATION_TYPE',
		payload: type
	};
}