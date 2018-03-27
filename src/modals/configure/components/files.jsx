//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Explorer from './explorer.jsx';
import File from './file.jsx';
import Search from './search.jsx';
import Sorts from './sorts.jsx';

class Files extends React.Component {
	constructor(props) {
		super(props);
	}

	renderFiles = (files, render) => {
		return (
			<div key={render.key} style={render.style}>
				<File
					isChecked={files[render.index].isChecked}
					newName={files[render.index].NewName}
					originalName={files[render.index].OriginalName}
					size={files[render.index].Size}
					type={files[render.index].Type}
					fileKey={files[render.index].Key}
					toggleChecked={this.toggleChecked}
				/>
			</div>
		);
	};

	searchFiles = evt => {
		this.props.actions.configure.searchFiles(evt.target.value);
	};

	toggleChecked = key => {
		this.props.actions.configure.toggleFileChecked(key);
	};

	render() {
		let visibleFiles = this.props.files.filter(file => file.isVisible);
		return (
			<div id='files'>
				<div id='files-bar'>
					<Search style='files' placeholder='Search original name...' onChange={this.searchFiles} />
					<div id='filters'>Filters</div>
				</div>
				<Sorts actions={this.props.actions} />
				<Explorer
					width={700}
					height={300}
					rowCount={visibleFiles.length}
					rowHeight={50}
					renderer={this.renderFiles.bind(this, visibleFiles)}
				/>
			</div>
		);
	}
}

Files.propTypes = {
	files: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default Files;
