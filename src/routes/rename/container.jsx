//React modules
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Containers
import Browse from 'modals/browse/container.jsx';
import Configure from 'modals/configure/container.jsx';
import Finalize from 'modals/finalize/container.jsx';
import Options from 'modals/options/container.jsx';
import Progress from 'progress/container.jsx';

//Actions
import * as progressActions from 'progress/actions';

class Rename extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.childFactoryCreator = this.childFactoryCreator.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.props.actions.progress.initialize(), 0);
	}

	componentWillUnmount() {
		this.props.actions.progress.setDefault();
	}

	childFactoryCreator = classNames => {
		child => React.cloneElement(child, { classNames });
	};

	render() {
		return (
			<div id='rename'>
				<TransitionGroup childFactory={this.childFactoryCreator(this.props.progress.animation)}>
					<CSSTransition key={this.props.location.pathname} timeout={1000} classNames={this.props.progress.animation}>
						<Switch location={this.props.location}>
							<Route path='/app/rename/browse' render={props => <Browse {...props} />} />
							<Route path='/app/rename/configure' render={props => <Configure {...props} />} />
							<Route path='/app/rename/options' render={props => <Options {...props} />} />
							<Route path='/app/rename/finalize' render={props => <Finalize {...props} />} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Progress />
			</div>
		);
	}
}

Rename.propTypes = {
	actions: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	progress: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { progress: state.progress };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			progress: bindActionCreators(progressActions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Rename);
