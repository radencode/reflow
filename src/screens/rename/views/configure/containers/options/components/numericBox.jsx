import PropTypes from 'prop-types';
import React from 'react';

class NumericBox extends React.Component {
	constructor(props) {
		super();
		this.state = { number: props.value };
	}

	handleOnChange = evt => {
		let userEneteredNumber = parseInt(evt.target.value);
		if (userEneteredNumber >= 0 && userEneteredNumber <= 10000) {
			this.props.updateAttributeOptions(this.props.optionIndex, userEneteredNumber);
			this.setState({ number: userEneteredNumber });
		}
	};

	handleAdd = () => {
		if (this.state.number < 10000) {
			this.props.updateAttributeOptions(this.props.optionIndex, this.state.number + 1);
			this.setState({ number: this.state.number + 1 });
		}
	};

	handleSubtract = () => {
		if (this.state.number > 0) {
			this.props.updateAttributeOptions(this.props.optionIndex, this.state.number - 1);
			this.setState({ number: this.state.number - 1 });
		}
	};

	render() {
		return (
			<div class='option numericbox'>
				<div class='input-name'>{this.props.name}</div>
				<div class='numericbox-container'>
					<button class='subtract' onClick={this.handleSubtract}>
						<i class='material-icons'>remove</i>
					</button>
					<input class='input-number' type='number' value={this.state.number} onChange={this.handleOnChange} />
					<button class='add' onClick={this.handleAdd}>
						<i class='material-icons'>add</i>
					</button>
				</div>
			</div>
		);
	}
}

NumericBox.propTypes = {
	name: PropTypes.string.isRequired,
	optionIndex: PropTypes.number.isRequired,
	updateAttributeOptions: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
};

export default NumericBox;
