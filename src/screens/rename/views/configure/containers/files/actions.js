export function load(files) {
	return {
		type: 'FILES_DATA_LOAD',
		payload: files.map(file => {
			return {
				id: file.Id,
				newName: file.NewName,
				originalName: file.OriginalName,
				size: file.Size,
				type: file.Type,
				isSelected: file.Filtered,
			};
		}),
	};
}

export function sort(type, direction, field) {
	return {
		type: 'FILES_DATA_SORT',
		payload: {
			type,
			direction,
			field,
		},
	};
}

export function setPath(path) {
	return {
		type: 'FILES_SET_PATH',
		payload: path,
	};
}

export function setCount(count) {
	return {
		type: 'FILES_COUNT_UPDATE',
		payload: count,
	};
}

export function toggleIsSelected(id) {
	return {
		type: 'FILE_IS_SELECTED_TOGGLE',
		payload: id,
	};
}

export function deleteFile(id) {
	return {
		type: 'FILE_DATA_DELETE',
		payload: id,
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

export function clearData() {
	return {
		type: 'FILES_CLEAR_DATA',
	};
}
