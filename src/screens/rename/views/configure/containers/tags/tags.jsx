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
import * as alert_actions from 'shared/notifications/alert/actions';
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as files_actions from 'screens/rename/views/configure/containers/files/actions';
import * as options_actions from 'screens/rename/views/configure/containers/options/actions';
import * as progress_actions from 'shared/progress/actions';
import * as tags_actions from './actions';

//Reflow API
import APIController from 'lib/reflow';

class Tags extends React.Component {
	constructor(props) {
		super(props);
		this.state = { keyword: '', vListConfig: { width: 250, height: 150, rowHeight: 30 } };
		this.smallVListQuery = window.matchMedia('(min-width: 1600px) and (min-height: 900px)');
		this.bigVListQuery = window.matchMedia('(min-width: 1900px) and (min-height: 1000px)');
		this.reflow = new APIController();
	}

	componentDidMount() {
		this.smallVirtualizedListConfig(this.smallVListQuery);
		this.smallVListQuery.addListener(this.smallVirtualizedListConfig);
		this.bigVirtualizedListConfig(this.bigVListQuery);
		this.bigVListQuery.addListener(this.bigVirtualizedListConfig);
	}

	componentWillUnmount() {
		this.smallVListQuery.removeListener(this.smallVirtualizedListConfig);
		this.bigVListQuery.removeListener(this.bigVirtualizedListConfig);
	}

	smallVirtualizedListConfig = config => {
		if (config.matches) {
			return;
		}
		this.setState({ ...this.state, vListConfig: { width: 250, height: 150, rowHeight: 30 } });
	};

	bigVirtualizedListConfig = config => {
		if (config.matches) {
			this.setState({ ...this.state, vListConfig: { width: 300, height: 245, rowHeight: 35 } });
			return;
		}
		if (window.innerWidth < 1600 || window.innerHeight < 900)
			this.setState({ ...this.state, vListConfig: { width: 250, height: 150, rowHeight: 30 } });
		else this.setState({ ...this.state, vListConfig: { width: 300, height: 210, rowHeight: 35 } });
	};

	renderTags = (tags, render) => {
		return (
			<div key={render.key} style={render.style}>
				<Tag
					applyTag={this.applyTagToFiles}
					id={tags[render.index].id}
					count={tags[render.index].count}
					name={tags[render.index].name}
					options={tags[render.index].options}
					type={tags[render.index].tagType}
				/>
			</div>
		);
	};

	searchTags = evt => {
		this.setState({ keyword: evt.target.value });
	};

	applyTagToFiles = async (tagId, tagType, name, options) => {
		try {
			this.props.actions.files.updateLoader(true, 'Applying attribute to files...');
			// await this.reflow.syncFiles(
			// 	this.props.store.files.data.map(file => ({
			// 		Id: file.id,
			// 		NewName: file.newName,
			// 		OriginalName: file.originalName,
			// 		Size: file.size,
			// 		Type: file.type,
			// 		Filtered: file.isSelected,
			// 	}))
			// );
			let optionsInToObject = {};
			options.forEach(option => {
				optionsInToObject[option.props.name] = option.props.value;
			});
			await this.reflow.applyTagToFiles({
				OrderId: this.props.store.attributes.count,
				TagType: tagType,
				Options: optionsInToObject,
			});
			const updatedFiles = await this.reflow.fetchFiles();
			const count = await this.reflow.fetchFilesCount();
			this.props.actions.files.load(updatedFiles);
			this.props.actions.files.setCount(count);
			this.props.actions.attributes.applyAttribute(tagId, tagType, name, options);
			this.props.actions.progress.setUnsavedData();
			this.props.actions.tags.addToTagCount(tagId);
			this.props.actions.options.updateOptions(this.props.store.attributes.count - 1, name, tagType, options);
			this.props.actions.files.updateLoader(false, 'Loading...');
		} catch (err) {
			this.props.actions.alert.openAlert(
				'There has been an error in applying attribute to files.',
				'Please try again or log error.',
				[
					{
						label: 'Log Error',
						action: err => {
							console.log(err);
						},
					},
					{
						label: 'Cancel',
						action: false,
					},
				],
				err
			);
		}
	};

	filterTags = (tags, keyword) => {
		return tags.filter(tag => (tag.name.toLowerCase().indexOf(keyword.toLowerCase()) === 0 ? true : false));
	};

	render() {
		const tags = this.filterTags(this.props.store.tags.data, this.state.keyword);
		return (
			<div id='configure-tags'>
				<Search style='tags' placeholder='Search attributes...' onChange={this.searchTags} />
				<div class='breaker' />
				<VirtualizedList
					width={this.state.vListConfig.width}
					height={this.state.vListConfig.height}
					rowCount={tags.length}
					rowHeight={this.state.vListConfig.rowHeight}
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
		store: { tags: state.rename.tags, attributes: state.rename.attributes, files: state.rename.files },
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			alert: bindActionCreators(alert_actions, dispatch),
			attributes: bindActionCreators(attributes_actions, dispatch),
			files: bindActionCreators(files_actions, dispatch),
			options: bindActionCreators(options_actions, dispatch),
			progress: bindActionCreators(progress_actions, dispatch),
			tags: bindActionCreators(tags_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
