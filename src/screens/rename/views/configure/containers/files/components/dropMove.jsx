//React modules
import PropTypes from 'prop-types';
import React from 'react';

class DropMove extends React.Component {
	constructor() {
		super();
		this.state = { stage: 'initial' };
	}

	handleDragEnter = evt => {
		this.setState({ stage: 'draggedOver' });
		evt.preventDefault();
	};

	handleDragOver = evt => {
		evt.preventDefault();
	};

	handleDragLeave = evt => {
		this.setState({ stage: 'initial' });
		evt.preventDefault();
	};

	handleDrop = evt => {
		this.setState({ stage: 'dropped' });
		this.props.onDrop(evt.dataTransfer.getData('text'), evt.target.dataset.id);
		setTimeout(() => {
			this.setState({ stage: 'initial' });
		}, 500);
	};

	render() {
		return (
			<div class='drop-container'>
				<div
					class='drop'
					data-id={this.props.id}
					onDragEnter={this.handleDragEnter}
					onDragOver={this.handleDragOver}
					onDragLeave={this.handleDragLeave}
					onDrop={this.handleDrop}
				>
					{this.props.name}
					<div class={`drag-animation ${this.state.stage}`}>
						<i class='material-icons'>done</i>
					</div>
				</div>
			</div>
		);
	}
}

DropMove.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	onDrop: PropTypes.func.isRequired,
};

export default DropMove;
