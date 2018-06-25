//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import Attribute from './components/attribute';

//Actions
import * as attributes_actions from './actions';
import * as options_actions from 'screens/rename/views/configure/containers/options/actions';

class Attributes extends React.Component {
	handleRightArrow = () => {
		if (this.props.store.attributes.scrollPosition < this.props.store.attributes.count) {
			this.props.actions.options.hideOptions();
			this.props.actions.attributes.updateScrollPosition(this.props.store.attributes.scrollPosition + 1);
		}
	};

	handleLeftArrow = () => {
		if (this.props.store.attributes.scrollPosition > 1) {
			this.props.actions.options.hideOptions();
			this.props.actions.attributes.updateScrollPosition(this.props.store.attributes.scrollPosition - 1);
		}
	};

	showDragArea = () => {
		this.props.actions.options.hideOptions();
		this.props.actions.attributes.attributeIsBeingDragged(true);
	};

	hideDragArea = () => {
		this.props.actions.attributes.attributeIsBeingDragged(false);
	};

	render() {
		return (
			<div id='configure-attributes'>
				<div class='attribute-scroll'>
					<div
						class={`attribute-arrow left ${
							(this.props.store.attributes.count >= 0 && this.props.store.attributes.count < 5) ||
							this.props.store.attributes.scrollPosition < 5
								? 'disable'
								: ''
						}`}
						onClick={this.handleLeftArrow}
					>
						<i class='material-icons'>keyboard_arrow_left</i>
					</div>
				</div>
				<div class='attributes'>
					<div class={`slider pos${this.props.store.attributes.scrollPosition}`}>
						{this.props.store.attributes.count === 0 ? (
							<div class='attribute-info'>
								<h3>Click on attribute to apply it.</h3>
							</div>
						) : (
							this.props.store.attributes.data.map(attribute => (
								<Attribute
									key={attribute.id}
									id={attribute.id}
									isActive={this.props.store.attributes.activeId === attribute.id ? true : false}
									isOptions={this.props.store.options.data.length > 0 ? true : false}
									name={attribute.name}
									tagType={attribute.tagType}
									showDragArea={this.showDragArea}
									hideDragArea={this.hideDragArea}
									updateAttributeHasBeenDropped={this.props.actions.attributes.attributeHasBeenDropped}
									hasAttributeBeenDropped={this.props.store.attributes.hasBeenDropped}
									options={attribute.options}
									showOptions={this.props.actions.options.updateOptions}
									updateActiveId={this.props.actions.attributes.updateActiveId}
								/>
							))
						)}
					</div>
				</div>
				<div class='attribute-scroll'>
					<div
						class={`attribute-arrow right ${
							this.props.store.attributes.count < 5 ||
							this.props.store.attributes.scrollPosition === this.props.store.attributes.count
								? 'disable'
								: ''
						}`}
						onClick={this.handleRightArrow}
					>
						<i class='material-icons'>keyboard_arrow_right</i>
					</div>
				</div>
			</div>
		);
	}
}

Attributes.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { attributes: state.rename.attributes, options: state.rename.options } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			attributes: bindActionCreators(attributes_actions, dispatch),
			options: bindActionCreators(options_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);
