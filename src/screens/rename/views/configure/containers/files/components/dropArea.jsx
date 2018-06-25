//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import DropDelete from './dropDelete.jsx';
import DropMove from './dropMove.jsx';

class DropArea extends React.Component {
	onDropDelete = draggedID => {
		this.props.actions.attributes.attributeHasBeenDropped(true);
		const attributeId = this.props.store.attributes.data[draggedID].id;
		const tagId = this.props.store.attributes.data[draggedID].tagId;
		setTimeout(() => {
			if (this.props.store.attributes.count === 1) this.props.actions.progress.clearUnsavedData();
			this.props.actions.attributes.deleteAttribute(attributeId);
			this.props.actions.tags.subtractFromTagCount(tagId);
			this.props.actions.attributes.updateIds();
			this.props.updateAttributeStructure();
		}, 500);
	};

	onDropMove = (draggedID, droppedID) => {
		this.props.actions.attributes.attributeHasBeenDropped(true);
		if (draggedID === droppedID) return;
		const updatedAttributes = [...this.props.store.attributes.data];
		updatedAttributes.splice(droppedID, 0, updatedAttributes.splice(draggedID, 1)[0]);
		setTimeout(() => {
			this.props.actions.attributes.update(updatedAttributes);
			this.props.actions.attributes.updateIds();
			this.props.updateAttributeStructure();
		}, 500);
	};

	render() {
		return (
			<div class={`drop-area ${this.props.store.attributes.isBeingDragged ? 'open' : 'close'}`}>
				<div class='drops'>
					{this.props.store.attributes.data.map(drop => (
						<DropMove key={`drop-${drop.id}`} name={drop.name} id={drop.id} onDrop={this.onDropMove} />
					))}
				</div>
				<DropDelete onDrop={this.onDropDelete} />
			</div>
		);
	}
}

DropArea.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
	updateAttributeStructure: PropTypes.func.isRequired,
};

export default DropArea;
