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
import DropArea from './components/dropArea.jsx';
import File from './components/file.jsx';
import Loader from './components/loader.jsx';
import Sorts from './components/sorts.jsx';

//Actions
import * as alert_actions from 'shared/notifications/alert/actions';
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as files_actions from './actions';
import * as progress_actions from 'shared/progress/actions';
import * as tags_actions from 'screens/rename/views/configure/containers/tags/actions';

//Reflow API
import APIController from 'lib/reflow';

class Files extends React.Component {
	constructor() {
		super();
		this.state = { keyword: '', vListConfig: { width: 700, height: 350, rowHeight: 50 } };
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
			this.setState({ ...this.state, vListConfig: { width: 880, height: 420, rowHeight: 60 } });
			return;
		}
		this.setState({ ...this.state, vListConfig: { width: 700, height: 350, rowHeight: 50 } });
	};

	bigVirtualizedListConfig = config => {
		if (config.matches) {
			this.setState({ ...this.state, vListConfig: { width: 1050, height: 540, rowHeight: 60 } });
			return;
		}
		if (window.innerWidth < 1600 || window.innerHeight < 900)
			this.setState({ ...this.state, vListConfig: { width: 700, height: 350, rowHeight: 50 } });
		else this.setState({ ...this.state, vListConfig: { width: 880, height: 420, rowHeight: 60 } });
	};

	renderFiles = (files, render) => {
		return (
			<div key={render.key} style={render.style}>
				<File
					isSelected={files[render.index].isSelected}
					id={files[render.index].id}
					newName={files[render.index].newName}
					originalName={files[render.index].originalName}
					size={files[render.index].size}
					type={files[render.index].type}
					toggleIsSelected={this.toggleIsSelected}
				/>
			</div>
		);
	};

	searchFiles = evt => {
		this.setState({ keyword: evt.target.value });
	};

	toggleIsSelected = key => {
		this.props.actions.files.toggleIsSelected(key);
	};

	filterFiles = (files, keyword) => {
		return files.filter(file => (file.originalName.toLowerCase().indexOf(keyword.toLowerCase()) === 0 ? true : false));
	};

	updateAttributeStructure = async () => {
		try {
			this.props.actions.files.updateLoader(true, 'Updating attribute oreder...');
			await this.reflow.updateTagsStructure([
				...this.props.store.attributes.data.map(tag => {
					let optionsInToObject = {};
					tag.options.forEach(option => {
						optionsInToObject[option.props.name] = option.props.value;
					});
					return {
						OrderId: tag.id,
						TagType: tag.tagType,
						Options: optionsInToObject,
					};
				}),
			]);
			const updatedFiles = await this.reflow.fetchFiles();
			const count = await this.reflow.fetchFilesCount();
			this.props.actions.files.load(updatedFiles);
			this.props.actions.files.setCount(count);
			this.props.actions.files.updateLoader(false, 'Loading...');
		} catch (err) {
			this.props.actions.alert.openAlert(
				'There has been an error in updating attributes order.',
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

	render() {
		const files = this.filterFiles(this.props.store.files.data, this.state.keyword);
		return (
			<div id='configure-files'>
				<div id='configure-files-bar'>
					<Search style='files' placeholder='Search original name...' onChange={this.searchFiles} />
					<div id='configure-filters'>Filters</div>
				</div>
				<Sorts sortFiles={this.props.actions.files.sort} />
				{this.props.store.files.loader.isLoading ? (
					<Loader message={this.props.store.files.loader.message} />
				) : (
					<VirtualizedList
						width={this.state.vListConfig.width}
						height={this.state.vListConfig.height}
						rowCount={files.length}
						rowHeight={this.state.vListConfig.rowHeight}
						renderer={this.renderFiles.bind(this, files)}
					/>
				)}
				<DropArea
					actions={this.props.actions}
					store={this.props.store}
					updateAttributeStructure={this.updateAttributeStructure}
				/>
			</div>
		);
	}
}

Files.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { files: state.rename.files, attributes: state.rename.attributes } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			alert: bindActionCreators(alert_actions, dispatch),
			attributes: bindActionCreators(attributes_actions, dispatch),
			files: bindActionCreators(files_actions, dispatch),
			progress: bindActionCreators(progress_actions, dispatch),
			tags: bindActionCreators(tags_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Files);
