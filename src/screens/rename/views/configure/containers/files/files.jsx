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
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as files_actions from './actions';
import * as tags_actions from 'screens/rename/views/configure/containers/tags/actions';

class Files extends React.Component {
	constructor() {
		super();
		this.state = { keyword: '' };
	}

	renderFiles = (files, render) => {
		return (
			<div key={render.key} style={render.style}>
				<File
					isSelected={files[render.index].isSelected}
					newName={files[render.index].NewName}
					originalName={files[render.index].OriginalName}
					size={files[render.index].Size}
					type={files[render.index].Type}
					fileKey={files[render.index].Key}
					toggleSelected={this.toggleSelected}
				/>
			</div>
		);
	};

	searchFiles = evt => {
		this.setState({ keyword: evt.target.value });
	};

	toggleSelected = key => {
		this.props.actions.files.toggleIsSelected(key);
	};

	filterFiles = (files, keyword) => {
		return files.filter(file => (file.OriginalName.toLowerCase().indexOf(keyword.toLowerCase()) === 0 ? true : false));
	};

	render() {
		const files = this.filterFiles(this.props.store.files.list, this.state.keyword);
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
						width={700}
						height={350}
						rowCount={files.length}
						rowHeight={50}
						renderer={this.renderFiles.bind(this, files)}
					/>
				)}
				<DropArea
					attributeHasBeenDropped={this.props.actions.attributes.attributeHasBeenDropped}
					deleteDroppedAttribute={this.props.actions.attributes.deleteAttribute}
					drops={this.props.store.attributes.list}
					isDropAreaOpen={this.props.store.attributes.isBeingDragged}
					updateAttributeOrder={this.props.actions.attributes.update}
					subtractFromTagCount={this.props.actions.tags.subtractFromTagCount}
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
	return { store: { files: state.files, attributes: state.attributes } };
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

export default connect(mapStateToProps, mapDispatchToProps)(Files);
