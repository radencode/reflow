//React modules
import PropTypes from 'prop-types';
import React from 'react';

const File = ({ isChecked, newName, originalName, size, type, toggleChecked, fileKey }) => {
	return (
		<div class='file' onClick={toggleChecked.bind(this, fileKey)}>
			<div class='file-select'>
				<div class={`file-check ${isChecked ? 'checked' : 'unchecked'}`}>
					<i class='material-icons'>done</i>
				</div>
			</div>
			<div class='file-type'>
				<span>{type}</span>
			</div>
			<div class='file-original'>{originalName}</div>
			<div class='file-new'>{newName}</div>
			<div class='file-size'>{size}</div>
		</div>
	);
};

File.propTypes = {
	isChecked: PropTypes.bool.isRequired,
	newName: PropTypes.string.isRequired,
	originalName: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	toggleChecked: PropTypes.func.isRequired,
	fileKey: PropTypes.number.isRequired,
};

export default File;
