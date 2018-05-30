//React modules
import PropTypes from 'prop-types';
import React from 'react';

class Tag extends React.Component {
	render() {
		return (
			<div
				class='tag'
				onDoubleClick={this.props.applyTag.bind(this, this.props.id, this.props.name, this.props.options)}
			>
				<i class='material-icons'>style</i>
				<h2 class='tag-name'>{this.props.name}</h2>
				<div class={`tag-counter ${this.props.count > 1 ? 'show' : 'hide'}`}>{this.props.count}</div>
			</div>
		);
	}
}

Tag.propTypes = {
	applyTag: PropTypes.func.isRequired,
	count: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
};

export default Tag;
