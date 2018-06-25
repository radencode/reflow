//React modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

const Spinner = ({ isSpinning }) => {
	return (
		<svg class={`spinner ${isSpinning ? 'active' : ''}`} viewport='0 0 100 100'>
			<circle class='background small' r='155' cx='185' cy='185' fill='transparent' strokeDasharray='973.89' />
			<circle
				class={`loader small ${isSpinning ? 'active' : ''}`}
				r='155'
				cx='185'
				cy='185'
				fill='transparent'
				strokeDasharray='973.89'
			/>
			<MediaQuery query='(min-width: 1600px) and (min-height: 880px)'>
				<circle class='background' r='180' cx='215' cy='215' fill='transparent' strokeDasharray='1130.97' />
				<circle
					class={`loader ${isSpinning ? 'active' : ''}`}
					r='180'
					cx='215'
					cy='215'
					fill='transparent'
					strokeDasharray='1130.97'
				/>
			</MediaQuery>
		</svg>
	);
};

Spinner.propTypes = {
	isSpinning: PropTypes.bool.isRequired,
};

export default Spinner;
