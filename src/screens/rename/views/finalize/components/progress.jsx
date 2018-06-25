//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Progress = ({ message, progress }) => {
	return (
		<div class='renaming-progess'>
			<div class='full-bar-progress'>
				<div class='load-bar' style={{ width: `${progress}%` }} />
			</div>
			<div class='label-container' style={{ width: `${progress}%` }}>
				<div class='progress-label'>
					<div class='label-arrow' />
					<h2>{`${progress}%`}</h2>
				</div>
			</div>
			<div class='progress-stage'>
				<h1>{message}</h1>
			</div>
		</div>
	);
};

Progress.propTypes = {
	message: PropTypes.string.isRequired,
	progress: PropTypes.number.isRequired,
};

export default Progress;
