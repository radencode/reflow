//React modules
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Shared
import Progress from 'shared/progress';

//Views
import Browse from 'screens/rename/views/browse';
import Configure from 'screens/rename/views/configure';
import Finalize from 'screens/rename/views/finalize';
import Settings from 'screens/rename/views/settings';

//Actions
import * as progressActions from 'shared/progress/actions';

class Rename extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(() => this.props.actions.progress.initialize(), 0);
	}

	componentWillUnmount() {
		this.props.actions.progress.setDefault();
	}

	childFactoryCreator = animation => child => React.cloneElement(child, { classNames: animation });

	render() {
		return (
			<div id='rename'>
				<TransitionGroup childFactory={this.childFactoryCreator(this.props.store.progress.animation)}>
					<CSSTransition
						key={this.props.location.pathname}
						timeout={500}
						classNames={this.props.store.progress.animation}
					>
						<Switch location={this.props.location}>
							<Route path='/app/rename/browse' render={props => <Browse {...props} />} />
							<Route path='/app/rename/configure' render={props => <Configure {...props} />} />
							<Route path='/app/rename/settings' render={props => <Settings {...props} />} />
							<Route path='/app/rename/finalize' render={props => <Finalize {...props} />} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Progress history={this.props.history} />
			</div>
		);
	}
}

Rename.propTypes = {
	actions: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { progress: state.rename.progress } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			progress: bindActionCreators(progressActions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Rename);
