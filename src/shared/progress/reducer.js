const defaultState = {
	steps: {
		browse: {
			style: { top: '100px', left: '29px' },
			linkLabel: 'browse',
			iconLabel: 1,
			link: '/app/rename/browse',
			status: 'inactive',
			current: true,
		},
		configure: {
			style: { top: '222px', left: '29px' },
			linkLabel: 'configure',
			iconLabel: 2,
			link: '/app/rename/configure',
			status: 'inactive',
			current: false,
		},
		options: {
			style: { top: '344px', left: '29px' },
			linkLabel: 'options',
			iconLabel: 3,
			link: '/app/rename/options',
			status: 'inactive',
			current: false,
		},
		finalize: {
			style: { top: '466px', left: '29px' },
			linkLabel: 'finalize',
			iconLabel: 4,
			link: '/app/rename/finalize',
			status: 'inactive',
			current: false,
		},
	},
	connectors: {
		browse_configure: {
			style: { top: '134px', left: '45px' },
			status: 'inactive',
		},
		configure_options: {
			style: { top: '256px', left: '45px' },
			status: 'inactive',
		},
		options_finalize: {
			style: { top: '378px', left: '45px' },
			status: 'inactive',
		},
	},
	animation: 'slide-up',
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
				browse: { ...state.steps.browse, status: 'active', current: true },
				configure: { ...state.steps.configure, status: 'inactive', current: false },
				options: { ...state.steps.options, status: 'inactive', current: false },
				finalize: { ...state.steps.finalize, status: 'inactive', current: false },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'inactive' },
				configure_options: { ...state.connectors.configure_options, status: 'inactive' },
				options_finalize: { ...state.connectors.options_finalize, status: 'inactive' },
			},
			animation: `slide-${action.payload.direction}`,
		};
	case 'PROGRESS_CONFIGURE':
		return {
			...state,
			steps: {
				browse: { ...state.steps.browse, status: 'active', current: false },
				configure: { ...state.steps.configure, status: 'active', current: true },
				options: { ...state.steps.options, status: 'inactive', current: false },
				finalize: { ...state.steps.finalize, status: 'inactive', current: false },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'active' },
				configure_options: { ...state.connectors.configure_options, status: 'inactive' },
				options_finalize: { ...state.connectors.options_finalize, status: 'inactive' },
			},
			animation: `slide-${action.payload.direction}`,
		};
	case 'PROGRESS_OPTIONS':
		return {
			...state,
			steps: {
				browse: { ...state.steps.browse, status: 'active', current: false },
				configure: { ...state.steps.configure, status: 'active', current: false },
				options: { ...state.steps.options, status: 'active', current: true },
				finalize: { ...state.steps.finalize, status: 'inactive', current: false },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'active' },
				configure_options: { ...state.connectors.configure_options, status: 'active' },
				options_finalize: { ...state.connectors.options_finalize, status: 'inactive' },
			},
			animation: `slide-${action.payload.direction}`,
		};
	case 'PROGRESS_FINALIZE':
		return {
			...state,
			steps: {
				browse: { ...state.steps.browse, status: 'active', current: false },
				configure: { ...state.steps.configure, status: 'active', current: false },
				options: { ...state.steps.options, status: 'active', current: false },
				finalize: { ...state.steps.finalize, status: 'active', current: true },
			},
			connectors: {
				browse_configure: { ...state.connectors.browse_configure, status: 'active' },
				configure_options: { ...state.connectors.configure_options, status: 'active' },
				options_finalize: { ...state.connectors.options_finalize, status: 'active' },
			},
			animation: `slide-${action.payload.direction}`,
		};
	default:
		return state;
	}
}
