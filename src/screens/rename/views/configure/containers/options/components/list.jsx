import PropTypes from 'prop-types';
import React from 'react';

class List extends React.Component {
	constructor(props) {
		super();
		this.state = { selected: props.value, isOpen: false };
	}

	handleChange = evt => {
		this.props.updateAttributeOptions(this.props.optionIndex, evt.target.value);
		this.setState({ selected: evt.target.value });
	};

	handleSelect = item => {
		this.props.updateAttributeOptions(this.props.optionIndex, item);
		this.setState({ selected: item, isOpen: false });
	};

	handleDropDown = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div class='option droplist'>
				<select value={this.state.selected} onChange={this.handleChange}>
					<option value={this.props.value} disabled>
						{this.props.value}
					</option>
					{this.props.list.map((item, index) => (
						<option key={`${this.props.value}-${index}-option`} value={item}>
							{item}
						</option>
					))}
				</select>
				<div class='styled-select'>
					<div class='styled-header' onClick={this.handleDropDown}>
						<span>{this.state.selected}</span>
						<i class={`material-icons ${this.state.isOpen ? 'open' : 'closed'}`}>keyboard_arrow_down</i>
					</div>
					<ul class={`styled-options ${this.state.isOpen ? 'open' : 'closed'}`}>
						{this.props.list.map((item, index) => (
							<li
								key={`${this.props.value}-${index}-div`}
								class={`styled-option ${this.state.selected === item ? 'selected' : ''}`}
								onClick={this.handleSelect.bind(this, item)}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

List.propTypes = {
	list: PropTypes.array.isRequired,
	updateAttributeOptions: PropTypes.func.isRequired,
	optionIndex: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
};

export default List;
