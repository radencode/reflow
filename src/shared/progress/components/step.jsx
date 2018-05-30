//React modules
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Step = ({ config, handleAction }) => {
	return (
		<div class='progress-step' style={config.style}>
			<div class={`circle ${config.status}`}>
				<div class={`icon ${config.status}`}>
					<h2 class={`label ${config.status}`}>{config.iconLabel}</h2>
				</div>
			</div>
			<div class='link'>
				<Link class={`link-label ${config.current ? 'current' : ''}`} to={`${config.link}`} onClick={handleAction}>
					{config.linkLabel}
				</Link>
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
