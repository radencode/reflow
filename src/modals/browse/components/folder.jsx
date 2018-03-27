//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Folder = ({ position, extention, match }) => {
	return (
		<div class={`folder ${match ? 'active' : 'inactive'}`} style={position}>
			<svg version='1.1' x='0px' y='0px' viewBox='0 0 55 75' enableBackground='new 0 0 55 75'>
				<path
					class='folder-edge'
					fill='#141B23'
					d='M54.5,75h-54C0.224,75,0,74.776,0,74.5v-74C0,0.224,0.224,0,0.5,0h40.125C46.239,5.614,49.386,8.761,55,14.375V74.5C55,74.776,54.776,75,54.5,75z'
				/>
			</svg>
			<h2 class='folder-name'>{extention}</h2>
		</div>
	);
};

Folder.propTypes = {
	extention: PropTypes.string.isRequired,
	match: PropTypes.bool.isRequired,
	position: PropTypes.object.isRequired,
};

export default Folder;
