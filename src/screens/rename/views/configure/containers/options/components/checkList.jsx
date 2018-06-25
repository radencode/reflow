import PropTypes from 'prop-types';
import React from 'react';

import CheckBox from './checkBox';

class CheckList extends React.Component {
	updateAttributeOptions = (optionIndex, value) => {
		const updatedCheckList = this.props.attributeOptions[this.props.optionIndex].props.value.map((checkbox, index) => {
			if (index === optionIndex) return { ...checkbox, props: { ...checkbox.props, value } };
			return { ...checkbox };
		});
		this.props.updateAttributeOptions(this.props.optionIndex, updatedCheckList);
	};

	render() {
		return (
			<div>
				{this.props.value.map((checkbox, index) => (
					<div class='checkbox-list-item' key={`${index}-list-${this.props.listKey}`}>
						<CheckBox
							value={checkbox.props.value}
							name={checkbox.props.name}
							optionIndex={index}
							updateAttributeOptions={this.updateAttributeOptions}
						/>
					</div>
				))}
			</div>
		);
	}
}

CheckList.propTypes = {
	attributeOptions: PropTypes.array.isRequired,
	listKey: PropTypes.string.isRequired,
	optionIndex: PropTypes.number.isRequired,
	updateAttributeOptions: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
};

export default CheckList;
