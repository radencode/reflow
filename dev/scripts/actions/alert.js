export function createAlert(_message, _success, _cancel){
	return {
		type: 'CREATE_ALERT',
		message: _message,
		success: _success,
		cancel: _cancel,
	};
}

export function fireAlert(_link){
	return {
		type: 'FIRE_ALERT',
		link: _link,
	};
}

export function closeAlert(){
	return {
		type: 'CLOSE_ALERT',
	};
}

export function destroyAlert(){
	return {
		type: 'DESTROY_ALERT',
	};
}