//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';

//Components
import CheckBox from './components/checkBox';
import CheckList from './components/checkList';
import List from './components/list';
import NumericBox from './components/numericBox';
import TextArea from './components/textArea';
import TextBox from './components/textBox';
import Toggle from './components/toggle';

class Options extends React.Component {
	constructor() {
		super();
		this.options = {
			Checkbox: CheckBox, // ** fix the lower case ** //
			CheckBox,
			CheckList,
			List,
			NumericBox,
			TextArea,
			TextBox,
			Toggle,
		};
	}

	renderOptions = list => {
		return list.map((option, index) => {
			const OptionComponent = this.options[option.Type];
			return (
				<div class='option-wrapper' key={`options-wrapper ${index}`}>
					<OptionComponent {...option.props} />
				</div>
			);
		});
	};

	getCurrentOptions = list => {
		if (list.length === 0) return <div class='initial-message'>Select attribute to view options</div>;
		else return this.renderOptions(list);
	};

	render() {
		return (
			<div id='configure-options'>
				<div id='configure-options-name'>{`${this.props.store.options.name} Options`}</div>
				<div class='breaker' />
				<div class='opitons'>
					<div class='options-list'>{this.getCurrentOptions(this.props.store.options.list)}</div>
				</div>
			</div>
		);
	}
}

Options.propTypes = {
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { options: state.options } };
};

export default connect(mapStateToProps, null)(Options);
