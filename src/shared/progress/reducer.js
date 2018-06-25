const defaultState = {
	steps: {
		browse: {
			style: { top: '100px', left: '29px' },
			linkLabel: 'browse',
			iconLabel: 1,
			status: 'inactive',
			current: true,
			disable: false,
		},
		configure: {
			style: { top: '222px', left: '29px' },
			linkLabel: 'configure',
			iconLabel: 2,
			status: 'inactive',
			current: false,
			disable: false,
		},
		settings: {
			style: { top: '344px', left: '29px' },
			linkLabel: 'settings',
			iconLabel: 3,
			status: 'inactive',
			current: false,
			disable: false,
		},
		finalize: {
			style: { top: '466px', left: '29px' },
			linkLabel: 'finalize',
			iconLabel: 4,
			status: 'inactive',
			current: false,
			disable: false,
		},
	},
	connectors: {
		browse_configure: {
			style: { top: '134px', left: '45px' },
			status: 'inactive',
		},
		configure_settings: {
			style: { top: '256px', left: '45px' },
			status: 'inactive',
		},
		settings_finalize: {
			style: { top: '378px', left: '45px' },
			status: 'inactive',
		},
	},
	animation: 'slide-up',
	unsaved: false,
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
	case 'SET_DEFAULT':
		return defaultState;

	case 'INITIALIZE':
		return { ...state, steps: { ...state.steps, browse: { ...state.steps.browse, status: 'active' } } };

	case 'PROGRESS_BROWSE':
		return {
			...state,
			steps: {
				browse: { ...state.steps.browse, status: 'active', current: true, disable: false },
				configure: { ...state.steps.configure, status: 'inactive', current: false, disable: false },
				settings: { ...state.steps.settings, status: 'inactive', current: false, disable: false },
				finalize: { ...state.steps.finalize, status: 'inactive', current: false, disable: false },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'inactive' },
				configure_settings: { ...state.connectors.configure_settings, status: 'inactive' },
				settings_finalize: { ...state.connectors.settings_finalize, status: 'inactive' },
			},
			animation: `slide-${action.payload.direction}`,
		};

	case 'PROGRESS_CONFIGURE':
		return {
			...state,
			steps: {
				browse: { ...state.steps.browse, status: 'active', current: false },
				configure: { ...state.steps.configure, status: 'active', current: true, disable: false },
				settings: { ...state.steps.settings, status: 'inactive', current: false, disable: false },
				finalize: { ...state.steps.finalize, status: 'inactive', current: false, disable: false },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'active' },
				configure_settings: { ...state.connectors.configure_settings, status: 'inactive' },
				settings_finalize: { ...state.connectors.settings_finalize, status: 'inactive' },
			},
			animation: `slide-${action.payload.direction}`,
		};

	case 'PROGRESS_SETTINGS':
		return {
			...state,
			steps: {
				browse: { ...state.steps.browse, status: 'active', current: false, disable: false },
				configure: { ...state.steps.configure, status: 'active', current: false, disable: false },
				settings: { ...state.steps.settings, status: 'active', current: true, disable: false },
				finalize: { ...state.steps.finalize, status: 'inactive', current: false, disable: false },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'active' },
				configure_settings: { ...state.connectors.configure_settings, status: 'active' },
				settings_finalize: { ...state.connectors.settings_finalize, status: 'inactive' },
			},
			animation: `slide-${action.payload.direction}`,
		};

	case 'PROGRESS_FINALIZE':
		return {
			...state,
			steps: {
				browse: { ...state.steps.browse, status: 'active', current: false, disable: false },
				configure: { ...state.steps.configure, status: 'active', current: false, disable: true },
				settings: { ...state.steps.settings, status: 'active', current: false, disable: true },
				finalize: { ...state.steps.finalize, status: 'active', current: true, disable: true },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'active' },
				configure_settings: { ...state.connectors.configure_settings, status: 'active' },
				settings_finalize: { ...state.connectors.settings_finalize, status: 'active' },
			},
			animation: `slide-${action.payload.direction}`,
		};

	case 'PROGRESS_SET_UNSAVED_DATA':
		return {
			...state,
			unsaved: true,
		};

	case 'PROGRESS_CLEAR_UNSAVED_DATA':
		return {
			...state,
			unsaved: false,
		};

	default:
		return state;
	}
}
