export function load(files) {
	return {
		type: 'FILES_LIST_UPDATE',
		payload: files.map(file => {
			return { ...file, isSelected: true };
		}),
	};
}

export function sort(type, direction, field) {
	return {
		type: 'FILES_LIST_SORT',
		payload: {
			type,
			direction,
			field,
		},
	};
}

export function setCount(count) {
	return {
		type: 'FILES_COUNT_SET',
		payload: count,
	};
}

export function toggleIsSelected(key) {
	return {
		type: 'FILE_IS_SELECTED_TOGGLE',
		payload: key,
	};
}

export function deleteFile(key) {
	return {
		type: 'FILE_DELETE',
		payload: key,
	};
}

export function updateLoader(isLoading, message) {
	return {
		type: 'FILES_LOADER_UPDATE',
		payload: {
			isLoading,
			message,
		},
	};
}
