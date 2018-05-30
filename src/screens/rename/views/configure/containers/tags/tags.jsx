//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Shared
import VirtualizedList from 'shared/virtualized-list';
import Search from 'shared/search-bar';

//Components
import Tag from './components/tag.jsx';

//Actions
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as files_actions from 'screens/rename/views/configure/containers/files/actions';
import * as tags_actions from './actions';

//Reflow API
import APIController from 'lib/reflow';

class Tags extends React.Component {
	constructor(props) {
		super(props);
		this.state = { keyword: '' };
		this.reflow = new APIController();
	}

	renderTags = (tags, render) => {
		return (
			<div key={render.key} style={render.style}>
				<Tag
					id={tags[render.index].Id}
					name={tags[render.index].Name}
					options={tags[render.index].Options}
					count={tags[render.index].count}
					applyTag={this.applyTagToFiles}
				/>
			</div>
		);
	};

	searchTags = evt => {
		this.setState({ keyword: evt.target.value });
	};

	applyTagToFiles = async (id, name, options) => {
		try {
			this.props.actions.attributes.applyAttribute(id, name, options);
			this.props.actions.tags.addToTagCount(id);
			this.props.actions.files.updateLoader(true, 'Applying attribute to files...');
			await this.reflow.fetchTags();
			setTimeout(() => {
				this.props.actions.files.updateLoader(false, 'Loading...');
			}, 1000);
		} catch (err) {
			console.log(new Error('Failed to apply attribute to files'));
		}
	};

	filterTags = (tags, keyword) => {
		return tags.filter(tag => (tag.Name.toLowerCase().indexOf(keyword.toLowerCase()) === 0 ? true : false));
	};

	render() {
		const tags = this.filterTags(this.props.store.tags.list, this.state.keyword);
		return (
			<div id='configure-tags'>
				<Search style='tags' placeholder='Search attributes...' onChange={this.searchTags} />
				<div class='breaker' />
				<VirtualizedList
					width={250}
					height={150}
					rowCount={tags.length}
					rowHeight={30}
					renderer={this.renderTags.bind(this, tags)}
				/>
			</div>
		);
	}
}

Tags.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		store: { tags: state.tags },
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			attributes: bindActionCreators(attributes_actions, dispatch),
			files: bindActionCreators(files_actions, dispatch),
			tags: bindActionCreators(tags_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
