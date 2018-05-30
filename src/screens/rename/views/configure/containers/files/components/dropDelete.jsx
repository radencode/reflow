//React modules
import PropTypes from 'prop-types';
import React from 'react';

class DropDelete extends React.Component {
	constructor() {
		super();
		this.state = { delete: 'initial' };
	}

	handleDragEnter = evt => {
		this.setState({ delete: 'draggedOver' });
		evt.preventDefault();
	};

	handleDragOver = evt => {
		evt.preventDefault();
	};

	handleDragLeave = evt => {
		this.setState({ delete: 'initial' });
		evt.preventDefault();
	};

	handleDrop = evt => {
		this.setState({ delete: 'dropped' });
		this.props.onDrop(evt.dataTransfer.getData('text'));
		setTimeout(() => {
			this.setState({ delete: 'initial' });
		}, 500);
	};

	render() {
		return (
			<div
				class='delete-drop'
				onDragEnter={this.handleDragEnter}
				onDragOver={this.handleDragOver}
				onDragLeave={this.handleDragLeave}
				onDrop={this.handleDrop}
			>
				<i class='material-icons'>delete_forever</i>
				<div class={`drag-animation ${this.state.delete}`}>
					<i class='material-icons'>done</i>
				</div>
			</div>
		);
	}
}

DropDelete.propTypes = {
	onDrop: PropTypes.func.isRequired,
};

export default DropDelete;
