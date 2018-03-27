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
				select: { active: false, up: true, field: { name: 'isChecked', type: 'boolean' } },
				type: { active: false, up: true, field: { name: 'Type', type: 'string' } },
				original: { active: true, up: true, field: { name: 'OriginalName', type: 'string' } },
				new: { active: false, up: true, field: { name: 'NewName', type: 'string' } },
				size: { active: false, up: true, field: { name: 'Size', type: 'string' } },
			},
			active: 'original',
		};
	}

	sortAnimation = name => {
		if (this.state.active === name) {
			this.setState({
				...this.state,
				sort: {
					...this.state.sort,
					[name]: { active: true, up: !this.state.sort[name].up, field: { ...this.state.sort[name].field } },
				},
			});
		} else {
			this.setState({
				sort: {
					...this.state.sort,
					[this.state.active]: { active: true, up: true, field: { ...this.state.sort[this.state.active].field } },
					[name]: { active: true, up: true, field: { ...this.state.sort[name].field } },
				},
				active: name,
			});
		}
	};

	sortFiles = name => {
		let sort = this.state.sort[name];
		this.props.actions.configure.sortFiles(sort.field.type, sort.up ? 'down' : 'up', sort.field.name);
	};

	onSort = name => {
		this.sortAnimation(name);
		this.sortFiles(name);
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
	actions: PropTypes.object.isRequired,
};

export default Sorts;
