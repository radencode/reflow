//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import Connector from './components/connector.jsx';
import Frame from './components/frame.jsx';
import Step from './components/step.jsx';

//Actions
import * as progressActions from './actions';

class Progress extends React.Component {
	browseAction = () => {
		this.props.actions.progress.progressToBrowse('down');
	};

	configureAction = () => {
		this.props.actions.progress.progressToConfigure('down');
	};

	optionsAction = () => {
		this.props.actions.progress.progressToOptions('down');
	};

	finalizeAction = () => {};

	render() {
		return (
			<div id='progress'>
				<Frame />
				<Step config={this.props.store.progress.steps.browse} handleAction={this.browseAction} />
				<Connector config={this.props.store.progress.connectors.browse_configure} />
				<Step config={this.props.store.progress.steps.configure} handleAction={this.configureAction} />
				<Connector config={this.props.store.progress.connectors.configure_options} />
				<Step config={this.props.store.progress.steps.options} handleAction={this.optionsAction} />
				<Connector config={this.props.store.progress.connectors.options_finalize} />
				<Step config={this.props.store.progress.steps.finalize} handleAction={this.finalizeAction} />
			</div>
		);
	}
}

Progress.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { progress: state.progress } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			progress: bindActionCreators(progressActions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
