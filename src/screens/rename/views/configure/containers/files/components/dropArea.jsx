//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import DropDelete from './dropDelete.jsx';
import DropMove from './dropMove.jsx';

class DropArea extends React.Component {
	onDropDelete = draggedID => {
		this.props.attributeHasBeenDropped(true);
		const deleteKey = this.props.drops[draggedID].key;
		const deleteId = this.props.drops[draggedID].id;
		setTimeout(() => {
			this.props.deleteDroppedAttribute(deleteKey);
			this.props.subtractFromTagCount(deleteId);
		}, 500);
	};

	onDropMove = (draggedID, droppedID) => {
		this.props.attributeHasBeenDropped(true);
		if (draggedID === droppedID) return;
		const updatedAttributes = [...this.props.drops];
		updatedAttributes.splice(droppedID, 0, updatedAttributes.splice(draggedID, 1)[0]);
		setTimeout(() => {
			this.props.updateAttributeOrder(updatedAttributes);
		}, 500);
	};

	render() {
		return (
			<div class={`drop-area ${this.props.isDropAreaOpen ? 'open' : 'close'}`}>
				<div class='drops'>
					{this.props.drops.map((drop, index) => (
						<DropMove key={`drop-${drop.key}`} name={drop.name} id={index} onDrop={this.onDropMove} />
					))}
				</div>
				<DropDelete onDrop={this.onDropDelete} />
			</div>
		);
	}
}

DropArea.propTypes = {
	attributeHasBeenDropped: PropTypes.func.isRequired,
	deleteDroppedAttribute: PropTypes.func.isRequired,
	drops: PropTypes.array.isRequired,
	isDropAreaOpen: PropTypes.bool.isRequired,
	updateAttributeOrder: PropTypes.func.isRequired,
	subtractFromTagCount: PropTypes.func.isRequired,
};

export default DropArea;
