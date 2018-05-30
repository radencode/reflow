//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Alert = ({ state }) => {
	return <div class={`fadeout-layer ${state ? 'on' : 'off'}`} />;
};

Fadeout.propTypes = {
	state: PropTypes.bool.isRequired,
};

export default Fadeout;
