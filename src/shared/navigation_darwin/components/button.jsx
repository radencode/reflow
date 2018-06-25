//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ action, disabled, icon, type }) => {
	return (
		<div class={`control-button ${type} ${disabled ? 'disabled' : ''}`} onClick={action}>
			<div class={`icon ${icon ? 'visible' : 'hidden'}`} />
		</div>
	);
};

Button.propTypes = {
	action: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired,
	icon: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
};

export default Button;
