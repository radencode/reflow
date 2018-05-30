//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Loader = ({ message }) => {
	return (
		<div id='configure-files-loader'>
			<div class='spinner-loader'>
				<div class='spinner-body' />
				<h2 class='loader-message'>{message}</h2>
			</div>
		</div>
	);
};

Loader.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Loader;
