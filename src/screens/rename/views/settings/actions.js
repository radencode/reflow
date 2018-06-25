export function setBackupOption(backup, active) {
	return {
		type: 'SETTINGS_SET_BACKUP',
		payload: {
			backup,
			active,
		},
	};
}

export function setBackupOptionPath(path) {
	return {
		type: 'SETTINGS_SET_BACKUP_PATH',
		payload: path,
	};
}

export function setExistsOption(exists, active) {
	return {
		type: 'SETTINGS_SET_EXISTS',
		payload: {
			exists,
			active,
		},
	};
}

export function setExistsOptionPath(path) {
	return {
		type: 'SETTINGS_SET_EXISTS_PATH',
		payload: path,
	};
}

export function setLocationOption(location, active) {
	return {
		type: 'SETTINGS_SET_LOCATION',
		payload: {
			location,
			active,
		},
	};
}

export function setLocationOptionPath(path) {
	return {
		type: 'SETTINGS_SET_LOCATION_PATH',
		payload: path,
	};
}

export function clearData() {
	return {
		type: 'SETTINGS_CLEAR_DATA',
	};
}
