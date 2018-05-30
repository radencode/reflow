//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Connector = ({ config }) => {
	return (
		<div class='progress-connector' style={config.style}>
			<div class={`bar ${config.status}`} />
		</div>
	);
};

Connector.propTypes = {
	config: PropTypes.object.isRequired,
};

export default Connector;
