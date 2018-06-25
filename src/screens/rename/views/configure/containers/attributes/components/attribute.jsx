//React modules
import PropTypes from 'prop-types';
import React from 'react';

class Attribute extends React.Component {
	constructor() {
		super();
		this.state = { stage: 'intial' };
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	handleDragStart = evt => {
		this.setState({ stage: 'dragging' });
		evt.dataTransfer.setData('text', evt.target.dataset.id);
		this.props.showDragArea();
	};

	endDragAndDrop = () => {
		if (this._isMounted) this.setState({ stage: 'initial' });
		this.props.hideDragArea();
	};

	handleDragEnd = evt => {
		if (this.props.hasAttributeBeenDropped) {
			setTimeout(() => {
				this.endDragAndDrop();
			}, 500);
		} else {
			this.endDragAndDrop();
		}
		this.props.updateAttributeHasBeenDropped(false);
		evt.preventDefault();
	};

	handleClick = () => {
		this.props.showOptions(this.props.id, this.props.name, this.props.tagType, this.props.options);
		this.props.updateActiveId(this.props.id);
	};

	render() {
		return (
			<div
				class={`attribute ${this.state.stage} ${this.props.isActive && this.props.isOptions ? 'selected' : ''}`}
				data-id={this.props.id}
				draggable={true}
				onDragStart={this.handleDragStart}
				onDragEnd={this.handleDragEnd}
				onClick={this.handleClick}
			>
				{this.props.name}
			</div>
		);
	}
}

Attribute.propTypes = {
	id: PropTypes.number.isRequired,
	isActive: PropTypes.bool.isRequired,
	isOptions: PropTypes.bool.isRequired,
	hasAttributeBeenDropped: PropTypes.bool.isRequired,
	hideDragArea: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	tagType: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	showDragArea: PropTypes.func.isRequired,
	showOptions: PropTypes.func.isRequired,
	updateActiveId: PropTypes.func.isRequired,
	updateAttributeHasBeenDropped: PropTypes.func.isRequired,
};

export default Attribute;
