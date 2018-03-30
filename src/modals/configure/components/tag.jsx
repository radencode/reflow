//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Tag = ({ name }) => {
	return (
		<div class='tag'>
			<i class='material-icons'>style</i>
			<h2 class='tag-name'>{name}</h2>
		</div>
	);
};

Tag.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Tag;
