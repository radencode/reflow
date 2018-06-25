import PropTypes from 'prop-types';
import React from 'react';

const Option = ({ action, label, icon, selected }) => {
	return (
		<div class={`option ${selected ? 'active' : ''}`} onClick={action}>
			<i class='material-icons'>{icon}</i>
			<h2 class='label'>{label}</h2>
		</div>
	);
};

Option.propTypes = {
	action: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
};

export default Option;
