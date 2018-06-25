const defaultState = {
	exists: '',
	existsPath: '',
	existsIndex: 0,
	backup: '',
	backupPath: '',
	backupIndex: 0,
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'SETTINGS_SET_BACKUP':
		return { ...state, backup: action.payload.backup, backupIndex: action.payload.index };

	case 'SETTINGS_SET_BACKUP_PATH':
		return { ...state, backupPath: action.payload };

	case 'SETTINGS_SET_EXISTS':
		return { ...state, exists: action.payload.exists, existsIndex: action.payload.index };

	case 'SETTINGS_SET_EXISTS_PATH':
		return { ...state, existsPath: action.payload };

	case 'SETTINGS_CLEAR_DATA':
		return defaultState;

	default:
		return state;
	}
};
