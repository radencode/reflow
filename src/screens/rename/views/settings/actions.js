export function setBackupOption(backup, index) {
	return {
		type: 'SETTINGS_SET_BACKUP',
		payload: {
			backup,
			index,
		},
	};
}

export function setBackupOptionPath(path) {
	return {
		type: 'SETTINGS_SET_BACKUP_PATH',
		payload: path,
	};
}

export function setExistsOption(exists, index) {
	return {
		type: 'SETTINGS_SET_EXISTS',
		payload: {
			exists,
			index,
		},
	};
}

export function setExistsOptionPath(path) {
	return {
		type: 'SETTINGS_SET_EXISTS_PATH',
		payload: path,
	};
}

export function clearData() {
	return {
		type: 'SETTINGS_CLEAR_DATA',
	};
}
