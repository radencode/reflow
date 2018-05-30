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

export function progressToOptions(_direction) {
	return {
		type: 'PROGRESS_OPTIONS',
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
