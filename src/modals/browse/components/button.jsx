//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ match, handler, icon, label }) => {
	return (
		<div class={`selector-button ${match ? 'active' : 'inactive'}`} onClick={handler}>
			<div class='selector-button-icon'>
				<i class='material-icons'>{icon}</i>
				<h2 class='selector-button-label'>{label}</h2>
			</div>
		</div>
	);
};

Button.propTypes = {
	icon: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	match: PropTypes.bool.isRequired,
	handler: PropTypes.func.isRequired,
};

export default Button;
