//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Explorer from './explorer.jsx';
import Search from './search.jsx';
import Tag from './Tag.jsx';

class Tags extends React.Component {
	constructor(props) {
		super(props);
	}

	renderTags = (tags, render) => {
		return (
			<div key={render.key} style={render.style}>
				<Tag name={tags[render.index].name} />
			</div>
		);
	};

	searchTags = evt => {
		this.props.actions.configure.searchTags(evt.target.value);
	};

	render() {
		let visibleTags = this.props.tags.filter(tag => tag.isVisible);
		return (
			<div id='tags'>
				<Search style='tags' placeholder='Search attributes...' onChange={this.searchTags} />
				<Explorer
					width={250}
					height={125}
					rowCount={visibleTags.length}
					rowHeight={25}
					renderer={this.renderTags.bind(this, visibleTags)}
				/>
			</div>
		);
	}
}

Tags.propTypes = {
	tags: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default Tags;
