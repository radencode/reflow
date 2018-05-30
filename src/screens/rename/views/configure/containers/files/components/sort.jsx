//Modules
import PropTypes from 'prop-types';
import React from 'react';

const Sort = ({ name, config, onSort }) => {
	return (
		<div class={`sort ${name.split(' ')[0]}`}>
			<div class='text' onClick={onSort.bind(this, name.split(' ')[0])}>
				<h3 class={`name ${config.isActive ? 'active' : ''}`}>{name}</h3>
				<div class={`icon ${config.isActive ? (config.isSortDown ? 'up' : 'down') : ''}`}>
					<i class='material-icons'>keyboard_arrow_down</i>
				</div>
			</div>
		</div>
	);
};

Sort.propTypes = {
	config: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	onSort: PropTypes.func.isRequired,
};

export default Sort;
