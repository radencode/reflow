export function addFiles(_files) {
	return {
		type: 'ADD_FILES',
		payload: {
			files: _files,
		},
	};
}

export function addTags(_tags) {
	return {
		type: 'ADD_TAGS',
		payload: {
			tags: _tags,
		},
	};
}

export function setCount(_count) {
	return {
		type: 'SET_COUNT',
		payload: {
			count: _count,
		},
	};
}

export function searchFiles(_keyword) {
	return {
		type: 'SEARCH_FILES',
		payload: {
			keyword: _keyword,
		},
	};
}

export function searchTags(_keyword) {
	return {
		type: 'SEARCH_TAGS',
		payload: {
			keyword: _keyword,
		},
	};
}

export function toggleFileChecked(_key) {
	return {
		type: 'TOGGLE_FILE_CHECKED',
		payload: {
			key: _key,
		},
	};
}

export function deleteFile(_key) {
	return {
		type: 'DELETE_FILE',
		payload: {
			key: _key,
		},
	};
}

export function sortFiles(_type, _direction, _field) {
	return {
		type: 'SORT_FILES',
		payload: {
			direction: _direction,
			type: _type,
			field: _field,
		},
	};
}
