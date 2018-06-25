export function updateOptions(attributeId, name, tagType, options) {
	return {
		type: 'OPTIONS_DATA_UPDATE',
		payload: {
			attributeId,
			name,
			tagType,
			options,
		},
	};
}

export function hideOptions() {
	return {
		type: 'OPTIONS_DATA_UPDATE',
		payload: {
			attributeId: 0,
			name: 'Attribute',
			options: [],
		},
	};
}

export function clearData() {
	return {
		type: 'OPTIONS_CLEAR_DATA',
	};
}
