//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ type, action }) => {
	return (
		<div class={`control-button ${type}`} onClick={action}>
			<div class='icon' />
		</div>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired,
};

export default Button;
