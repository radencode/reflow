//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Step = ({ config, handleAction }) => {
	return (
		<div class='progress-step' style={config.style}>
			<div class={`circle ${config.status}`}>
				<div class={`icon ${config.status}`}>
					<h2 class={`label ${config.status}`}>{config.iconLabel}</h2>
				</div>
			</div>
			<div class='link'>
				<div
					class={`link-label ${config.current ? 'current' : ''} ${config.disable ? 'disable' : ''}`}
					onClick={handleAction}
				>
					{config.linkLabel}
				</div>
				<div class={`link-slider ${config.status}`} />
			</div>
		</div>
	);
};

Step.propTypes = {
	config: PropTypes.object.isRequired,
	handleAction: PropTypes.func.isRequired,
};

export default Step;
