//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Spinner = ({ isSpinning }) => {
	return (
		<svg class={`spinner ${isSpinning ? 'active' : ''}`} width='370' height='370' viewport='0 0 100 100'>
			<circle class='background' r='155' cx='185' cy='185' fill='transparent' strokeDasharray='973.89' />
			<circle
				class={`loader ${isSpinning ? 'active' : ''}`}
				r='155'
				cx='185'
				cy='185'
				fill='transparent'
				strokeDasharray='973.89'
			/>
		</svg>
	);
};

Spinner.propTypes = {
	isSpinning: PropTypes.bool.isRequired,
};

export default Spinner;
