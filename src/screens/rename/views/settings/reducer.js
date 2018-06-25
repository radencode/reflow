const defaultState = {
	backup: '',
	backupActive: 0,
	backupPath: '',
	exists: '',
	existsActive: 0,
	existsPath: '',
	location: '',
	locationActive: 0,
	locationPath: '',
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'SETTINGS_SET_BACKUP':
		return { ...state, backup: action.payload.backup, backupActive: action.payload.active };

	case 'SETTINGS_SET_BACKUP_PATH':
		return { ...state, backupPath: action.payload };

	case 'SETTINGS_SET_EXISTS':
		return { ...state, exists: action.payload.exists, existsActive: action.payload.active };

	case 'SETTINGS_SET_EXISTS_PATH':
		return { ...state, existsPath: action.payload };

	case 'SETTINGS_SET_LOCATION':
		return { ...state, location: action.payload.location, locationActive: action.payload.active };

	case 'SETTINGS_SET_LOCATION_PATH':
		return { ...state, locationPath: action.payload };

	case 'SETTINGS_CLEAR_DATA':
		return defaultState;

	default:
		return state;
	}
};
