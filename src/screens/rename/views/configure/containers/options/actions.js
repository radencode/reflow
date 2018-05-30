export function updateOptions(name, options) {
	return {
		type: 'OPTIONS_LIST_UPDATE',
		payload: {
			name,
			options,
		},
	};
}

export function hideOptions() {
	return {
		type: 'OPTIONS_LIST_UPDATE',
		payload: {
			name: 'Attribute',
			options: [],
		},
	};
}
