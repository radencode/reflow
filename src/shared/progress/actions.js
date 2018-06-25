export function setDefault() {
	return {
		type: 'SET_DEFAULT',
	};
}

export function initialize() {
	return {
		type: 'INITIALIZE',
	};
}

export function progressToBrowse(_direction) {
	return {
		type: 'PROGRESS_BROWSE',
		payload: {
			direction: _direction,
		},
	};
}

export function progressToConfigure(_direction) {
	return {
		type: 'PROGRESS_CONFIGURE',
		payload: {
			direction: _direction,
		},
	};
}

export function progressToSettings(_direction) {
	return {
		type: 'PROGRESS_SETTINGS',
		payload: {
			direction: _direction,
		},
	};
}

export function progressToFinalize(_direction) {
	return {
		type: 'PROGRESS_FINALIZE',
		payload: {
			direction: _direction,
		},
	};
}

export function setUnsavedData() {
	return {
		type: 'PROGRESS_SET_UNSAVED_DATA',
	};
}

export function clearUnsavedData() {
	return {
		type: 'PROGRESS_CLEAR_UNSAVED_DATA',
	};
}
