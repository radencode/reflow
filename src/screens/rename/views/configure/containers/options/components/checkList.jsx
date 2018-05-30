import PropTypes from 'prop-types';
import React from 'react';

import CheckBox from './checkBox';

class CheckList extends React.Component {
	render() {
		return (
			<div>
				{this.props.list.map((checkbox, index) => (
					<div class='checkbox-list-item' key={`${index}-list-${this.props.name}`}>
						<CheckBox default={checkbox.default} name={checkbox.name} />
					</div>
				))}
			</div>
		);
	}
}

CheckList.propTypes = {
	name: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,
};

export default CheckList;
