//React modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

const Selector = ({ handleOpenInFolder, open }) => {
	return (
		<div class='open-in-folder'>
			<svg class='svg-open-in-folder' viewport='0 0 100 100'>
				<circle
					class={`circle-open-in-folder small ${open ? 'open' : ''}`}
					r='155'
					cx='185'
					cy='185'
					fill='transparent'
					strokeDasharray='973.89'
				/>
				<MediaQuery query='(min-width: 1600px) and (min-height: 900px)'>
					<circle
						class={`circle-open-in-folder ${open ? 'open' : ''}`}
						r='180'
						cx='215'
						cy='215'
						fill='transparent'
						strokeDasharray='1130.97'
					/>
				</MediaQuery>
			</svg>

			<div class={`folder-button ${open ? 'open' : ''}`} onClick={handleOpenInFolder}>
				<div class='folder-button-icon'>
					<i class='material-icons'>folder_open</i>
					<h2 class='folder-button-label'>Open in folder</h2>
				</div>
			</div>
		</div>
	);
};

Selector.propTypes = {
	handleOpenInFolder: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default Selector;
