//React modules
import PropTypes from 'prop-types';
import React from 'react';

const File = ({ isSelected, newName, originalName, size, type, toggleIsSelected, id }) => {
	return (
		<div class='file' onClick={toggleIsSelected.bind(this, id)}>
			<div class='file-select'>
				<div class={`file-check ${isSelected ? 'checked' : 'unchecked'}`}>
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
	id: PropTypes.number.isRequired,
	isSelected: PropTypes.bool.isRequired,
	newName: PropTypes.string.isRequired,
	originalName: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	toggleIsSelected: PropTypes.func.isRequired,
};

export default File;
