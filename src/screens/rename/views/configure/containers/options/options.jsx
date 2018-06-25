//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import CheckBox from './components/checkBox';
import CheckList from './components/checkList';
import List from './components/list';
import NumericBox from './components/numericBox';
import TextArea from './components/textArea';
import TextBox from './components/textBox';
import Toggle from './components/toggle';

//Actions
import * as alert_actions from 'shared/notifications/alert/actions';
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as files_actions from 'screens/rename/views/configure/containers/files/actions';

//Reflow API
import APIController from 'lib/reflow';

class Options extends React.Component {
	constructor() {
		super();
		this.options = {
			CheckBox,
			CheckList,
			List,
			NumericBox,
			TextArea,
			TextBox,
			Toggle,
		};
		this.reflow = new APIController();
	}

	renderOptions = (data, attributeId) => {
		return data.map((option, index) => {
			const OptionComponent = this.options[option.type];
			return (
				<div class='option-wrapper' key={`${attributeId}-options-wrapper-${index}`}>
					{option.type === 'CheckList' ? (
						<CheckList
							{...option.props}
							updateAttributeOptions={this.updateAttributeOptions}
							optionIndex={index}
							attributeOptions={this.props.store.attributes.data[this.props.store.options.attributeId].options}
						/>
					) : (
						<OptionComponent
							{...option.props}
							updateAttributeOptions={this.updateAttributeOptions}
							optionIndex={index}
						/>
					)}
				</div>
			);
		});
	};

	updateAttributeOptions = (optionIndex, value) => {
		const updatedOptions = this.props.store.attributes.data[this.props.store.options.attributeId].options.map(
			(option, index) => {
				if (index === optionIndex) return { ...option, props: { ...option.props, value } };
				return { ...option };
			}
		);
		this.props.actions.attributes.updateOptions(this.props.store.options.attributeId, updatedOptions);
		this.updateOptionsData(updatedOptions);
	};

	updateOptionsData = async updatedOptions => {
		try {
			this.props.actions.files.updateLoader(true, 'Updating attribute options...');
			let optionsInToObject = {};
			updatedOptions.forEach(option => {
				optionsInToObject[option.props.name] = option.props.value;
			});
			await this.reflow.updateTagsData({
				OrderId: this.props.store.options.attributeId,
				TagType: this.props.store.options.tagType,
				Options: optionsInToObject,
			});
			const updatedFiles = await this.reflow.fetchFiles();
			const count = await this.reflow.fetchFilesCount();
			this.props.actions.files.load(updatedFiles);
			this.props.actions.files.setCount(count);
			this.props.actions.files.updateLoader(false, 'Loading...');
		} catch (err) {
			this.props.actions.alert.openAlert(
				'There has been an error in updating attribute options.',
				'Please try again or log error.',
				[
					{
						label: 'Log Error',
						action: err => {
							console.log(err);
						},
					},
					{
						label: 'Cancel',
						action: false,
					},
				],
				err
			);
		}
	};

	getCurrentOptions = (data, attributeId) => {
		if (data.length === 0) return <div class='initial-message'>Select attribute to view options</div>;
		else return this.renderOptions(data, attributeId);
	};

	render() {
		return (
			<div id='configure-options'>
				<div id='configure-options-name'>{`${this.props.store.options.name} Options`}</div>
				<div class='breaker' />
				<div class='opitons'>
					<div class='options-list'>
						{this.getCurrentOptions(this.props.store.options.data, this.props.store.options.attributeId)}
					</div>
				</div>
			</div>
		);
	}
}

Options.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { options: state.rename.options, attributes: state.rename.attributes } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			alert: bindActionCreators(alert_actions, dispatch),
			attributes: bindActionCreators(attributes_actions, dispatch),
			files: bindActionCreators(files_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
