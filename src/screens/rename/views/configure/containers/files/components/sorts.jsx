//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Sort from './sort.jsx';

class Sorts extends React.Component {
	constructor() {
		super();
		this.state = {
			sort: {
				select: { isActive: false, isSortDown: true, field: { name: 'isSelected', type: 'boolean' } },
				type: { isActive: false, isSortDown: true, field: { name: 'Type', type: 'string' } },
				original: { isActive: true, isSortDown: true, field: { name: 'OriginalName', type: 'string' } },
				new: { isActive: false, isSortDown: true, field: { name: 'NewName', type: 'string' } },
				size: { isActive: false, isSortDown: true, field: { name: 'Size', type: 'string' } },
			},
			active: 'original',
		};
	}

	sortAnimation = sortTypeName => {
		if (this.state.active === sortTypeName) {
			this.setState({
				...this.state,
				sort: {
					...this.state.sort,
					[sortTypeName]: {
						isActive: true,
						isSortDown: !this.state.sort[sortTypeName].isSortDown,
						field: { ...this.state.sort[sortTypeName].field },
					},
				},
			});
		} else {
			this.setState({
				sort: {
					...this.state.sort,
					[this.state.active]: {
						active: false,
						isSortDown: true,
						field: { ...this.state.sort[this.state.active].field },
					},
					[sortTypeName]: { isActive: true, isSortDown: true, field: { ...this.state.sort[sortTypeName].field } },
				},
				active: sortTypeName,
			});
		}
	};

	sortFiles = sortTypeName => {
		let sort = this.state.sort[sortTypeName];
		let direction =
			this.state.active === sortTypeName ? (sort.isSortDown ? 'up' : 'down') : sort.isSortDown ? 'down' : 'up';
		this.props.sortFiles(sort.field.type, direction, sort.field.name);
	};

	onSort = sortTypeName => {
		this.sortFiles(sortTypeName);
		this.sortAnimation(sortTypeName);
	};

	render() {
		return (
			<div id='sort-list'>
				<Sort name='select' config={this.state.sort['select']} onSort={this.onSort} />
				<Sort name='type' config={this.state.sort['type']} onSort={this.onSort} />
				<Sort name='original name' config={this.state.sort['original']} onSort={this.onSort} />
				<Sort name='new name' config={this.state.sort['new']} onSort={this.onSort} />
				<Sort name='size' config={this.state.sort['size']} onSort={this.onSort} />
			</div>
		);
	}
}

Sorts.propTypes = {
	sortFiles: PropTypes.func.isRequired,
};

export default Sorts;
