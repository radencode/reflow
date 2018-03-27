//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ match, icon, label }) => {
	return (
		<div class={`selector-label ${match ? 'active' : 'inactive'}`}>
			<div class='selector-label-icon'>
				<i class='material-icons'>{icon}</i>
				<h2 class='selector-label-label'>{label}</h2>
			</div>
		</div>
	);
};

Label.propTypes = {
	icon: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	match: PropTypes.bool.isRequired,
};

export default Label;
