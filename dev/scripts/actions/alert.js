export function createAlert(message, success, cancel){
	return {
		type: 'CREATE_ALERT',
		payload: {
			message: message,
			success: success,
			cancel: cancel
		}	
	};
}

export function fireAlert(link){
	return {
		type: 'FIRE_ALERT',
		payload: {
			link: link
		}
	};
}

export function closeAlert(){
	return {
		type: 'CLOSE_ALERT'
	};
}

export function destroyAlert(){
	return {
		type: 'DESTROY_ALERT'
	};
}