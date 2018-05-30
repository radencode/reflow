//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Virtual list
import { List } from 'react-virtualized';

const VirtualizedList = ({ width, height, rowCount, rowHeight, renderer }) => {
	return (
		<div class='explorer'>
			<List
				class='virtual-list'
				width={width}
				height={height}
				rowCount={rowCount}
				rowHeight={rowHeight}
				rowRenderer={renderer}
			/>
		</div>
	);
};

VirtualizedList.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	rowCount: PropTypes.number.isRequired,
	rowHeight: PropTypes.number.isRequired,
	renderer: PropTypes.func.isRequired,
};

export default VirtualizedList;
